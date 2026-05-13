

define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	let autocompletes = {
		"Constant": {
			"false": {},
			"nil": {},
			"true": {},
		},
	};
	let isRegistered = false;

	async function register(file, target) {
		if (!target) target = autocompletes;
		return new Promise((resolve) => {
			require([`vs/basic-languages/lua/autocompletes/${file}.js`], (module) => {
				for (const kind in module.autocompletes) {
					if (kind === "__children__" || kind === "__using__" || kind === "__requires__") {
						target[kind] = module.autocompletes[kind];
						continue;
					}
					const autocompleteContainer = module.autocompletes[kind];
					if (!target[kind]) {
						target[kind] = {};
					};
					for (const name in autocompleteContainer) {
						target[kind][name] = autocompleteContainer[name]
					};
				};
				resolve();
			}, (err) => {
				console.error(`Failed to load autocomplete file: ${file}`, err);
				resolve(); // Resolve anyway to avoid hanging Load()
			});
		});
	};

	async function loadusing(parent) {
		if (!parent || typeof parent !== "object") return;

		if (parent.__requires__) {
			await Promise.all(parent.__requires__[0].map((file) => register(file, parent)));
			parent.__requires__ = undefined;
		}

		if (parent.__using__) {
			const target = parent.__children__ || parent;
			await Promise.all(parent.__using__.map((file) => register(file, target)));
			parent.__using__ = undefined;
		}

		if (parent.__children__) {
			await loadusing(parent.__children__);
		}

		for (const kind in parent) {
			if (kind.startsWith("__")) continue;
			const branch = parent[kind];
			if (!branch || typeof branch !== "object") continue;

			const keys = Object.keys(branch);
			const isCategoryMap = keys.some((key) => !key.startsWith("__"));

			if (isCategoryMap) {
				for (const name in branch) {
					const data = branch[name];
					if (data && typeof data === "object") {
						await loadusing(data);
					}
				}
			} else {
				await loadusing(branch);
			}
		}
	};

	exports.Load = async () => {
		if (isRegistered) {
			return Promise.resolve(autocompletes)
		} else {
			return Promise.all([
				register("classes"),
				register("functions"),
				register("functions-pd"),
				register("modules"),
				register("globals"),
				register("keywords"),
				register("snippets"),
			])
				.then(() => loadusing(autocompletes))
				.then(() => {
					isRegistered = true;
					return autocompletes;
				});
		};
	};

});
