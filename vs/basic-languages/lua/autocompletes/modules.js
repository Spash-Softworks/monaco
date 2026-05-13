define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Module": {
			"bit": {},
			"bit32": {},
			"coroutine": {},
			"crypt": {
				__children__: {},
				__using__: ['libraries/crypt'],
			},
			"debug": {
				__children__: {},
				__using__: ['libraries/debug'],
			},
			"drawing": {
				__children__: {},
				__using__: ['libraries/drawing'],
			},
			"math": {
				__children__: {},
				__using__: ['libraries/math'],
			},
			"oth": {
				__children__: {},
				__using__: ['libraries/oth'],
			},
			"raknet": {
				__children__: {},
				__using__: ['libraries/raknet'],
			},
			"services": {
				__children__: {},
				__using__: ['params/services'],
			},
			"os": {},
			"string": {},
			"table": {
				__children__: {},
				__using__: ['libraries/table'],
			},
			"utf8": {},
		},
		"raknet": {
			"__children__": {
				"Function": {
					"send()": {
						"insertText": "send(${1:data}, ${2:priority}, ${3:reliability}, ${4:ordering_channel})",
						"documentation": { "value": "Sends a packet manually." }
					},
					"Send()": {
						"insertText": "Send(${1:data}, ${2:priority}, ${3:reliability}, ${4:ordering_channel})",
						"documentation": { "value": "Alias for send." }
					},
					"add_send_hook()": {
						"insertText": "add_send_hook(${1:hook})",
						"documentation": { "value": "Registers a hook before a packet is sent." }
					},
					"AddSendHook()": {
						"insertText": "AddSendHook(${1:hook})",
						"documentation": { "value": "Alias for add_send_hook." }
					},
					"add_send_packet()": {
						"insertText": "add_send_packet(${1:hook})",
						"documentation": { "value": "Alias for add_send_hook." }
					},
					"AddSendPacket()": {
						"insertText": "AddSendPacket(${1:hook})",
						"documentation": { "value": "Alias for add_send_hook." }
					},
					"remove_send_hook()": {
						"insertText": "remove_send_hook(${1:hook})",
						"documentation": { "value": "Removes a send hook." }
					},
					"RemoveSendHook()": {
						"insertText": "RemoveSendHook(${1:hook})",
						"documentation": { "value": "Alias for remove_send_hook." }
					},
					"add_recv_hook()": {
						"insertText": "add_recv_hook(${1:hook})",
						"documentation": { "value": "Registers a hook before a packet is received." }
					},
					"AddRecvHook()": {
						"insertText": "AddRecvHook(${1:hook})",
						"documentation": { "value": "Alias for add_recv_hook." }
					},
					"remove_recv_hook()": {
						"insertText": "remove_recv_hook(${1:hook})",
						"documentation": { "value": "Removes a receive hook." }
					},
					"RemoveRecvHook()": {
						"insertText": "RemoveRecvHook(${1:hook})",
						"documentation": { "value": "Alias for remove_recv_hook." }
					}
				}
			}
		},
		"crypt": {
			"__children__": {
				"Function": {
					"encrypt()": { "insertText": "encrypt(${1:data}, ${2:key}, ${3:iv}, ${4:mode})", "documentation": { "value": "Encrypts data." } },
					"decrypt()": { "insertText": "decrypt(${1:data}, ${2:key}, ${3:iv}, ${4:mode})", "documentation": { "value": "Decrypts data." } },
					"hash()": { "insertText": "hash(${1:data}, ${2:algorithm})", "documentation": { "value": "Hashes data." } },
					"hmac()": { "insertText": "hmac(${1:data}, ${2:key}, ${3:algorithm})", "documentation": { "value": "Generates HMAC." } },
					"generatebytes()": { "insertText": "generatebytes(${1:size})", "documentation": { "value": "Generates random bytes." } },
					"generatekey()": { "insertText": "generatekey()", "documentation": { "value": "Generates an encryption key." } },
					"base64encode()": { "insertText": "base64encode(${1:data})", "documentation": { "value": "Encodes to Base64." } },
					"base64decode()": { "insertText": "base64decode(${1:data})", "documentation": { "value": "Decodes from Base64." } }
				},
				"Field": {
					"base64": {
						"__children__": {
							"Function": {
								"encode()": { "insertText": "encode(${1:data})" },
								"decode()": { "insertText": "decode(${1:data})" }
							}
						}
					},
					"lz4": {
						"__children__": {
							"Function": {
								"compress()": { "insertText": "compress(${1:data})" },
								"decompress()": { "insertText": "decompress(${1:data}, ${2:size})" }
							}
						}
					}
				}
			}
		},
		"oth": {
			"__children__": {
				"Function": {
					"hook()": { "insertText": "hook(${1:func}, ${2:hook})", "documentation": { "value": "Hooks a function." } },
					"unhook()": { "insertText": "unhook(${1:func})", "documentation": { "value": "Unhooks a function." } },
					"get_original()": { "insertText": "get_original(${1:func})", "documentation": { "value": "Gets the original function." } }
				}
			}
		},
		"drawing": {
			"__children__": {
				"Function": {
					"new()": { "insertText": "new(${1:type})", "documentation": { "value": "Creates a new Drawing object." } },
					"clear()": { "insertText": "clear()", "documentation": { "value": "Clears all drawings." } }
				}
			}
		},
		"RakNetPacket": {
			"__children__": {
				"Property": {
					"AsBuffer": { "documentation": { "value": "The packet payload as a buffer." } },
					"AsString": { "documentation": { "value": "The packet payload as a string." } },
					"AsArray": { "documentation": { "value": "The packet payload as an array of bytes." } },
					"Priority": { "documentation": { "value": "The RakNet send priority." } },
					"Reliability": { "documentation": { "value": "The RakNet reliability mode." } },
					"OrderingChannel": { "documentation": { "value": "The channel used for ordered traffic." } },
					"Size": { "documentation": { "value": "The payload size in bytes." } },
					"PacketId": { "documentation": { "value": "The ID of the packet." } }
				},
				"Method": {
					"SetData()": { "insertText": "SetData(${1:data})", "documentation": { "value": "Replaces the current packet payload." } },
					"Block()": { "insertText": "Block()", "documentation": { "value": "Prevents the packet from being sent." } },
					"Drop()": { "insertText": "Drop()", "documentation": { "value": "Drops the received packet." } }
				}
			}
		}
	};
});
