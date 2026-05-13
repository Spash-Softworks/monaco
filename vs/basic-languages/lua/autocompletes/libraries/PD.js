define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {
			"hook()": {
				"insertText": "hook(${1:func}, ${2:hook})",
				"documentation": {
					value: "```lua\nfunction hook(func: function, hook: function)\n  -> original: function\n```"
				},
			},
			"unhook()": {
				"insertText": "unhook(${1:func})",
				"documentation": {
					value: "```lua\nfunction unhook(func: function)\n```"
				},
			},
			"get_original()": {
				"insertText": "get_original(${1:func})",
				"documentation": {
					value: "```lua\nfunction get_original(func: function)\n  -> function\n```"
				},
			},
			"is_hook_thread()": {
				"insertText": "is_hook_thread()",
				"documentation": {
					value: "```lua\nfunction is_hook_thread()\n  -> boolean\n```"
				},
			},
			"get_original_thread()": {
				"insertText": "get_original_thread()",
				"documentation": {
					value: "```lua\nfunction get_original_thread()\n  -> thread\n```"
				},
			},
		}
	};
});
