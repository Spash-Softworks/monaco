define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {
			"add_send_hook()": {
				"insertText": "add_send_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction add_send_hook(hook: (packet: RakNetPacket) -> void)\n```",
						"",
						"Registers a hook that runs before a packet is sent. Use the hook to inspect, modify, or block the RakNetPacket."
					].join("\n")
				},
			},
			"AddSendHook()": {
				"insertText": "AddSendHook(${1:hook})",
				"documentation": {
					value: "Alias for `add_send_hook`."
				},
			},
			"remove_send_hook()": {
				"insertText": "remove_send_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction remove_send_hook(hook: function)\n```",
						"",
						"Removes a hook registered with raknet.add_send_hook."
					].join("\n")
				},
			},
			"RemoveSendHook()": {
				"insertText": "RemoveSendHook(${1:hook})",
				"documentation": {
					value: "Alias for `remove_send_hook`."
				},
			},
			"add_recv_hook()": {
				"insertText": "add_recv_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction add_recv_hook(hook: (packet: RakNetPacket) -> void)\n```",
						"",
						"Registers a hook that runs when a packet is received."
					].join("\n")
				},
			},
			"AddRecvHook()": {
				"insertText": "AddRecvHook(${1:hook})",
				"documentation": {
					value: "Alias for `add_recv_hook`."
				},
			},
			"remove_recv_hook()": {
				"insertText": "remove_recv_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction remove_recv_hook(hook: function)\n```",
						"",
						"Removes a hook registered with raknet.add_recv_hook."
					].join("\n")
				},
			},
			"RemoveRecvHook()": {
				"insertText": "RemoveRecvHook(${1:hook})",
				"documentation": {
					value: "Alias for `remove_recv_hook`."
				},
			},
			"send()": {
				"insertText": "send(${1:data}, ${2:priority}, ${3:reliability}, ${4:ordering_channel})",
				"documentation": {
					value: [
						"```lua\nfunction send(data: buffer | string | table, priority: number, reliability: number, ordering_channel: number)\n```",
						"",
						"Sends a packet manually. data accepts a buffer, string, or array of bytes."
					].join("\n")
				},
			},
			"Send()": {
				"insertText": "Send(${1:data}, ${2:priority}, ${3:reliability}, ${4:ordering_channel})",
				"documentation": {
					value: "Alias for `send`."
				},
			},
		},
		"Field": {
			"RakNetPacket": {
				"documentation": {
					value: "The RakNetPacket object is passed to send/recv hooks. Use it to inspect, modify, or block packets."
				},
				"__children__": {
					"Property": {
						"AsBuffer": {
							"documentation": {
								value: "The packet payload as a buffer."
							}
						},
						"AsString": {
							"documentation": {
								value: "The packet payload as a string."
							}
						},
						"AsArray": {
							"documentation": {
								value: "The packet payload as an array of bytes."
							}
						},
						"Priority": {
							"documentation": {
								value: "The RakNet send priority."
							}
						},
						"Reliability": {
							"documentation": {
								value: "The RakNet reliability mode."
							}
						},
						"OrderingChannel": {
							"documentation": {
								value: "The channel used for ordered traffic."
							}
						},
						"Size": {
							"documentation": {
								value: "The payload size in bytes."
							}
						},
						"PacketId": {
							"documentation": {
								value: "The ID of the packet."
							}
						}
					},
					"Method": {
						"SetData()": {
							"insertText": "SetData(${1:data})",
							"documentation": {
								value: "Replaces the current packet payload with data."
							}
						},
						"Block()": {
							"insertText": "Block()",
							"documentation": {
								value: "Prevents the current packet from being sent."
							}
						},
						"Drop()": {
							"insertText": "Drop()",
							"documentation": {
								value: "Drops the current packet."
							}
						}
					}
				}
			}
		}
	};
});
