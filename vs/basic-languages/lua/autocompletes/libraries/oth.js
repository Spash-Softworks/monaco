define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {
			"hook()": {
				"insertText": "hook(${1:func}, ${2:hook})",
				"documentation": {
					value: [
						"```lua\nfunction hook(func: function, hook: function)\n  -> original: function\n```",
						"",
						"Hooks a C function securely on a separate thread."
					].join("\n")
				},
			},
			"unhook()": {
				"insertText": "unhook(${1:func})",
				"documentation": {
					value: [
						"```lua\nfunction unhook(func: function)\n```",
						"",
						"Removes a hook created with oth.hook."
					].join("\n")
				},
			},
			"get_original()": {
				"insertText": "get_original(${1:func})",
				"documentation": {
					value: [
						"```lua\nfunction get_original(func: function)\n  -> function\n```",
						"",
						"Returns the original function for a hooked function."
					].join("\n")
				},
			},
			"is_hook_thread()": {
				"insertText": "is_hook_thread()",
				"documentation": {
					value: [
						"```lua\nfunction is_hook_thread()\n  -> boolean\n```",
						"",
						"Checks if the code is currently running in a hook thread."
					].join("\n")
				},
			},
			"get_original_thread()": {
				"insertText": "get_original_thread()",
				"documentation": {
					value: [
						"```lua\nfunction get_original_thread()\n  -> thread\n```",
						"",
						"Returns the original thread from which the hook was triggered."
					].join("\n")
				},
			},
		}
	};
});
