define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {
			"encrypt()": {
				"insertText": "encrypt(${1:data}, ${2:key}, ${3:iv}, ${4:mode})",
				"documentation": {
					value: [
						"```lua\nfunction encrypt(data: string, key: string, iv: string?, mode: string?)\n  -> string\n```",
						"",
						"Encrypts data with a key."
					].join("\n")
				},
			},
			"decrypt()": {
				"insertText": "decrypt(${1:data}, ${2:key}, ${3:iv}, ${4:mode})",
				"documentation": {
					value: [
						"```lua\nfunction decrypt(data: string, key: string, iv: string?, mode: string?)\n  -> string\n```",
						"",
						"Decrypts data with a key."
					].join("\n")
				},
			},
			"hash()": {
				"insertText": "hash(${1:data}, ${2:algorithm})",
				"documentation": {
					value: [
						"```lua\nfunction hash(data: string, algorithm: string)\n  -> string\n```",
						"",
						"Generates a cryptographic hash of data."
					].join("\n")
				},
			},
			"hmac()": {
				"insertText": "hmac(${1:data}, ${2:key}, ${3:algorithm})",
				"documentation": {
					value: [
						"```lua\nfunction hmac(data: string, key: string, algorithm: string)\n  -> string\n```",
						"",
						"Generates HMAC authentication code."
					].join("\n")
				},
			},
			"generatebytes()": {
				"insertText": "generatebytes(${1:size})",
				"documentation": {
					value: [
						"```lua\nfunction generatebytes(size: number)\n  -> string\n```",
						"",
						"Generates secure random bytes."
					].join("\n")
				},
			},
			"generatekey()": {
				"insertText": "generatekey()",
				"documentation": {
					value: [
						"```lua\nfunction generatekey()\n  -> string\n```",
						"",
						"Generates a random encryption key."
					].join("\n")
				},
			},
			"base64encode()": {
				"insertText": "base64encode(${1:data})",
				"documentation": {
					value: "```lua\nfunction base64encode(data: string)\n  -> string\n```"
				},
			},
			"base64decode()": {
				"insertText": "base64decode(${1:data})",
				"documentation": {
					value: "```lua\nfunction base64decode(data: string)\n  -> string\n```"
				},
			},
			"lz4compress()": {
				"insertText": "lz4compress(${1:data})",
				"documentation": {
					value: "```lua\nfunction lz4compress(data: string)\n  -> string\n```"
				},
			},
			"lz4decompress()": {
				"insertText": "lz4decompress(${1:data}, ${2:size})",
				"documentation": {
					value: "```lua\nfunction lz4decompress(data: string, size: number)\n  -> string\n```"
				},
			},
		},
		"Field": {
			"base64": {
				"__children__": {
					"Function": {
						"encode()": {
							"insertText": "encode(${1:data})",
							"documentation": {
								value: "```lua\nfunction encode(data: string)\n  -> string\n```"
							}
						},
						"decode()": {
							"insertText": "decode(${1:data})",
							"documentation": {
								value: "```lua\nfunction decode(data: string)\n  -> string\n```"
							}
						}
					}
				}
			},
			"lz4": {
				"__children__": {
					"Function": {
						"compress()": {
							"insertText": "compress(${1:data})",
							"documentation": {
								value: "```lua\nfunction compress(data: string)\n  -> string\n```"
							}
						},
						"decompress()": {
							"insertText": "decompress(${1:data}, ${2:size})",
							"documentation": {
								value: "```lua\nfunction decompress(data: string, size: number)\n  -> string\n```"
							}
						}
					}
				}
			}
		}
	};
});
