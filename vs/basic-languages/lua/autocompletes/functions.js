define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {
		"Function": {

			// RakNet functions (global availability):
			"raknet.send()": {
				"insertText": "raknet.send(${1:data}, ${2:priority}, ${3:reliability}, ${4:ordering_channel})",
				"documentation": {
					value: [
						"```lua\nfunction raknet.send(data: buffer | string | table, priority: number, reliability: number, ordering_channel: number)\n```",
						"",
						"Sends a packet manually. data accepts a buffer, string, or array of bytes."
					].join("\n")
				},
			},
			"raknet.add_send_hook()": {
				"insertText": "raknet.add_send_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction raknet.add_send_hook(hook: (packet: RakNetPacket) -> void)\n```",
						"",
						"Registers a hook that runs before a packet is sent. Use the hook to inspect, modify, or block the RakNetPacket."
					].join("\n")
				},
			},
			"raknet.add_recv_hook()": {
				"insertText": "raknet.add_recv_hook(${1:hook})",
				"documentation": {
					value: [
						"```lua\nfunction raknet.add_recv_hook(hook: (packet: RakNetPacket) -> void)\n```",
						"",
						"Registers a hook that runs when a packet is received."
					].join("\n")
				},
			},

			// Debug functions (global availability):
			"debug.getconstant()": {
				"insertText": "debug.getconstant(${1:f}, ${2:index})",
				"documentation": { "value": "```lua\nfunction debug.getconstant(f: function|integer, index: number)\n  -> any\n```\nReturns the constant at the given index of the function or level `f`." }
			},
			"debug.getconstants()": {
				"insertText": "debug.getconstants(${1:f})",
				"documentation": { "value": "```lua\nfunction debug.getconstants(f: function|integer)\n  -> Array<any>\n```\nReturns the list of constants in the function or level `f`." }
			},
			"debug.getinfo()": {
				"insertText": "debug.getinfo(${1:f})",
				"documentation": { "value": "```lua\nfunction debug.getinfo(f: function|integer)\n  -> FunctionInfo\n```\nReturns a table with information about a function." }
			},
			"debug.getproto()": {
				"insertText": "debug.getproto(${1:f}, ${2:index}, ${3:activated})",
				"documentation": { "value": "```lua\nfunction debug.getproto(f: function|integer, index: number, activated: boolean)\n  -> function | Array<function>\n```\nGets the inner function at the given index of the function or level `f`." }
			},
			"debug.getprotos()": {
				"insertText": "debug.getprotos(${1:f})",
				"documentation": { "value": "```lua\nfunction debug.getprotos(f: function|integer)\n  -> Array<function>\n```\nReturns a list of inner functions for the function or level `f`." }
			},
			"debug.getstack()": {
				"insertText": "debug.getstack(${1:level}, ${2:index})",
				"documentation": { "value": "```lua\nfunction debug.getstack(level: number, index: number)\n  -> any\n```\nGets the value from the stack at the given level and index." }
			},
			"debug.getupvalue()": {
				"insertText": "debug.getupvalue(${1:f}, ${2:index})",
				"documentation": { "value": "```lua\nfunction debug.getupvalue(f: function|integer, index: number)\n  -> any\n```\nReturns the value of the upvalue at the given index of the function or level `f`." }
			},
			"debug.getupvalues()": {
				"insertText": "debug.getupvalues(${1:f})",
				"documentation": { "value": "```lua\nfunction debug.getupvalues(f: function|integer)\n  -> Array<any>\n```\nReturns the list of upvalues in the function or level `f`." }
			},
			"debug.setconstant()": {
				"insertText": "debug.setconstant(${1:f}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction debug.setconstant(f: function|integer, index: number, value: any)\n```\nAssigns the value to the constant with the given index of the function `f`." }
			},
			"debug.setstack()": {
				"insertText": "debug.setstack(${1:level}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction debug.setstack(level: number, index: number, value: any)\n```\nAssigns the value to the stack item with the given index of the level `f`." }
			},
			"debug.setupvalue()": {
				"insertText": "debug.setupvalue(${1:f}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction debug.setupvalue(f: function|integer, index: number, value: any)\n```\nAssigns the value to the upvalue with the given index of the function `f`." }
			},
			"debug.isvalidlevel()": {
				"insertText": "debug.isvalidlevel(${1:level})",
				"documentation": { "value": "```lua\nfunction debug.isvalidlevel(level: number)\n  -> boolean\n```\nReturns true if the stack level is valid." }
			},

			// Debug functions (global aliases):
			"getconstant()": {
				"insertText": "getconstant(${1:f}, ${2:index})",
				"documentation": { "value": "```lua\nfunction getconstant(f: function|integer, index: number)\n  -> any\n```\nReturns the constant at the given index of the function or level `f`." }
			},
			"getconstants()": {
				"insertText": "getconstants(${1:f})",
				"documentation": { "value": "```lua\nfunction getconstants(f: function|integer)\n  -> Array<any>\n```\nReturns the list of constants in the function or level `f`." }
			},
			"getinfo()": {
				"insertText": "getinfo(${1:f})",
				"documentation": { "value": "```lua\nfunction getinfo(f: function|integer)\n  -> FunctionInfo\n```\nReturns a table with information about a function." }
			},
			"getproto()": {
				"insertText": "getproto(${1:f}, ${2:index}, ${3:activated})",
				"documentation": { "value": "```lua\nfunction getproto(f: function|integer, index: number, activated: boolean)\n  -> function | Array<function>\n```\nGets the inner function at the given index of the function or level `f`." }
			},
			"getprotos()": {
				"insertText": "getprotos(${1:f})",
				"documentation": { "value": "```lua\nfunction getprotos(f: function|integer)\n  -> Array<function>\n```\nReturns a list of inner functions for the function or level `f`." }
			},
			"getstack()": {
				"insertText": "getstack(${1:level}, ${2:index})",
				"documentation": { "value": "```lua\nfunction getstack(level: number, index: number)\n  -> any\n```\nGets the value from the stack at the given level and index." }
			},
			"getupvalue()": {
				"insertText": "getupvalue(${1:f}, ${2:index})",
				"documentation": { "value": "```lua\nfunction getupvalue(f: function|integer, index: number)\n  -> any\n```\nReturns the value of the upvalue at the given index of the function or level `f`." }
			},
			"getupvalues()": {
				"insertText": "getupvalues(${1:f})",
				"documentation": { "value": "```lua\nfunction getupvalues(f: function|integer)\n  -> Array<any>\n```\nReturns the list of upvalues in the function or level `f`." }
			},
			"setconstant()": {
				"insertText": "setconstant(${1:f}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction setconstant(f: function|integer, index: number, value: any)\n```\nAssigns the value to the constant with the given index of the function `f`." }
			},
			"setstack()": {
				"insertText": "setstack(${1:level}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction setstack(level: number, index: number, value: any)\n```\nAssigns the value to the stack item with the given index of the level `f`." }
			},
			"setupvalue()": {
				"insertText": "setupvalue(${1:f}, ${2:index}, ${3:value})",
				"documentation": { "value": "```lua\nfunction setupvalue(f: function|integer, index: number, value: any)\n```\nAssigns the value to the upvalue with the given index of the function `f`." }
			},
			"isvalidlevel()": {
				"insertText": "isvalidlevel(${1:level})",
				"documentation": { "value": "```lua\nfunction isvalidlevel(level: number)\n  -> boolean\n```\nReturns true if the stack level is valid." }
			},

			// Roblox:
			"assert()": {
				"insertText": "assert(${1:v}, ${2:message})",
				"documentation": {
					value: [
						"```lua\nfunction assert(v: any, message: any)\n  -> any\n```",
						"",
						"Calls error if the value of its argument is falsy and returns `v` if truthy."
					].join("\n")
				},
			},

			"delay()": {
				"insertText": "delay(${1:delayTime}, ${2:callback})",
				"documentation": {
					value: [
						"```lua\nfunction delay(delayTime: number, callback: function)\n```",
						"",
						"Schedules a function to be executed after `delayTime` seconds have passed, without yielding the current thread."
					].join("\n")
				},
			},

			"elapsedTime()": {
				"insertText": "elapsedTime()",
				"documentation": {
					value: [
						"```lua\nfunction elapsedTime()\n  -> number\n```",
						"",
						"Returns how much time has elapsed since the current instance of Roblox was started."
					].join("\n")
				},
			},

			"error()": {
				"insertText": "error(${1:message}, ${2:level})",
				"documentation": {
					value: [
						"```lua\nfunction error(message: any [, level: integer])\n  -> number\n```",
						"",
						"Terminates the last protected function called and returns message as the error object."
					].join("\n")
				},
			},

			"getmetatable()": {
				"insertText": "getmetatable(${1:object})",
				"documentation": {
					value: [
						"```lua\nfunction getmetatable(object: any)\n  -> metatable: table\n```",
						"",
						"Returns the metatable of the given object."
					].join("\n")
				},
			},

			"getfenv()": {
				"insertText": "getfenv(${1:f})",
				"documentation": {
					value: [
						"```lua\nfunction getfenv([f: any(1)])\n  -> table\n```",
						"",
						"Returns the current environment in use by the function. `f` can be a Lua function or a number that specifies the function at that stack level."
					].join("\n")
				},
			},

			"ipairs()": {
				"insertText": "ipairs(${1:t})",
				"documentation": {
					value: [
						"```lua\nfunction ipairs(t: table)\n  -> iterator: any\n  2. t: table\n  3. i: integer(0)\n```",
						"---",
						"```lua\nfor i, v in ipairs(t) do\n\tbody\nend\n```"
					].join("\n")
				},
			},

			"loadstring()": {
				"insertText": "loadstring(${1:string}, ${2:chunkname})",
				"documentation": {
					value: [
						"```lua\nfunction loadstring(string [, chunkname: string])\n  -> function\n  2. error_message: string\n```",
						"",
						"Loads a chunk from the given string."
					].join("\n")
				},
			},

			"next()": {
				"insertText": "next(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction next(table: table [, index: any])\n  -> key: any\n  2. value: any\n```",
						"",
						"Returns the next index of the table and its associated value."
					].join("\n")
				},
			},

			"newproxy()": {
				"insertText": "newproxy(${1:addMetatable})",
				"documentation": {
					value: "```lua\nfunction newproxy(addMetatable: boolean)\n  -> userdata\n```",
				},
			},

			"pairs()": {
				"insertText": "pairs(${1:t})",
				"documentation": {
					value: [
						"```lua\nfunction pairs(t: table)\n  -> @next: function\n  2. t: table\n  3. nil\n```",
						"---",
						"```lua\nfor i, v in pairs(t) do\n\tbody\nend\n```"
					].join("\n")
				},
			},

			"pcall()": {
				"insertText": "pcall(${1:f}, ${2:arg}, ${3:...})",
				"documentation": {
					value: [
						"```lua\nfunction pcall(f: function [, arg1: any, ...])\n  -> success: boolean\n  2. result: any\n  3. ...\n```",
						"",
						"Calls function with the given arguments in protected mode."
					].join("\n")
				},
			},

			"print()": {
				"insertText": "print(${1:...})",
				"documentation": {
					value: [
						"```lua\nfunction print(...)\n```",
						"",
						"Receives any number of arguments and prints their values to stdout."
					].join("\n")
				},
			},

			"rawequal()": {
				"insertText": "rawequal(${1:v1}, ${2:v2})",
				"documentation": {
					value: [
						"```lua\nfunction rawequal(v1: any, v2: any)\n  -> boolean\n```",
						"",
						"Checks whether `v1` is equal to `v2`, without invoking the `__eq` metamethod."
					].join("\n")
				},
			},

			"rawget()": {
				"insertText": "rawget(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction rawget(table: table, index: any)\n  -> any\n```",
						"",
						"Gets the real value of `table[index]`, without invoking the `__index` metamethod."
					].join("\n")
				},
			},

			"require()": {
				"insertText": "require(${1:module})",
				"documentation": {
					value: "```lua\nfunction rawget(module: ModuleScript)\n  -> any\n```",
				},
			},

			"rawset()": {
				"insertText": "rawset(${1:table}, ${2:index})",
				"documentation": {
					value: [
						"```lua\nfunction rawset(table: table, index: any, value: any)\n  -> table\n  -> any\n```",
						"",
						"Sets the real value of `table[index]` to value, without invoking the `__newindex` metamethod."
					].join("\n")
				},
			},

			"spawn()": {
				"insertText": "spawn(${1:callback})",
				"documentation": {
					value: [
						"```lua\nfunction spawn(callback: function)\n```",
						"",
						"Runs the specified callback function in a separate thread, without yielding the current thread."
					].join("\n")
				},
			},

			"setfenv()": {
				"insertText": "setfenv(${1:f|integer}, ${2:table})",
				"documentation": {
					value: [
						"```lua\nfunction setfenv(f: function|integer, table)\n  -> function\n```",
						"",
						"Sets the environment to be used by the given function. 'f' can be a Lua function or a number that specifies the function at that stack level."
					].join("\n")
				},
			},

			"select()": {
				"insertText": "select(${1:string|integer}, ${2:...})",
				"documentation": {
					value: '```lua\nfunction select(index: string|integer, ...)\n  -> any\n\nindex: string/integer\n   | "#"\n   | integer\n```',
				},
			},

			"settings()": {
				"insertText": "settings()",
				"documentation": {
					value: [
						"```lua\nfunction settings()\n  -> GlobalSettings\n```",
						"",
						"Returns the GlobalSettings object, which can be used to access the settings objects that are used in Roblox Studio’s settings menu."
					].join("\n")
				},
			},

			"setmetatable()": {
				"insertText": "setmetatable(${1:table}, ${2:metatable})",
				"documentation": {
					value: [
						"```lua\nfunction setmetatable(table: table, metatable: table)\n  -> table\n```",
						"",
						"Sets the metatable for the given table."
					].join("\n")
				},
			},

			"type()": {
				"insertText": "type(${1:v})",
				"documentation": {
					value: [
						"```lua\nfunction type(v: any)\n  -> type: string\n```",
						"",
						"Returns the type of its only argument, coded as a string.",
						"",
						'```lua',
						'type: string\n   | "nil"\n   | "number"\n   | "string"\n   | "boolean"\n   | "table"\n   | "function"\n   | "thread"\n   | "userdata"',
						'```',
					].join("\n")
				},
			},

			"typeof()": {
				"insertText": "typeof(${1:object})",
				"documentation": {
					value: [
						"```lua\nfunction typeof(object: any)\n  -> string\n```",
						"",
						"Returns the type of the object specified, as a string. This function is more accurate than Lua’s native `type` function, as it does not denote Roblox-specific types as userdata."
					].join("\n")
				},
			},

			"tostring()": {
				"insertText": "tostring(${1:v})",
				"documentation": {
					value: [
						"```lua\nfunction tostring(v: any)\n  -> string\n```",
						"",
						"Receives a value of any type and converts it to a string in a human-readable format."
					].join("\n")
				},
			},

			"time()": {
				"insertText": "time()",
				"documentation": {
					value: [
						"```lua\nfunction time()\n  -> number\n```",
						"",
						"Returns the amount of time, in seconds, that has elapsed since the current game instance started running. If the current game instance is not running, this will be 0"
					].join("\n")
				},
			},

			"tonumber()": {
				"insertText": "tonumber(${1:e|number}, ${2:base})",
				"documentation": {
					value: [
						"```lua\nfunction tonumber(e: string|number [, base: integer])\n  -> number\n```",
						"",
						"Tries to convert its argument to a number."
					].join("\n")
				},
			},

			"tick()": {
				"insertText": "tick()",
				"documentation": {
					value: [
						"```lua\nfunction tick()\n  -> number\n```",
						"",
						"Returns how much time has elapsed, in seconds, since the UNIX epoch, on the current local session’s computer."
					].join("\n")
				},
			},

			"unpack()": {
				"insertText": "unpack(${1:list}, ${2:i}, ${3:j})",
				"documentation": {
					value: [
						'```lua', 'function unpack(list: table [, i: integer(1) [, j: integer]]): ...any', '```',
						'',
						'Returns all elements from an array as results.',
						'',
						'---',
						'```lua', 'return list[i], list[i+1], ···, list[j]', '```',
					].join("\n")
				},
			},

			"UserSettings()": {
				"insertText": "UserSettings()",
				"documentation": {
					value: [
						"```lua\nfunction UserSettings()\n  -> UserSettings\n```",
						"",
						"Returns the UserSettings object, which is used to read information from the current user’s game menu settings."
					].join("\n")
				},
			},

			"warn()": {
				"insertText": "warn(${1:...})",
				"documentation": {
					value: [
						"```lua\nfunction warn(...)\n```",
						"",
						"Emits a warning with a message composed by the concatenation of all its arguments (which should be strings)."
					].join("\n")
				},
			},

			"wait()": {
				"insertText": "wait(${1:seconds})",
				"documentation": {
					value: [
						"```lua\nfunction wait(seconds: number)\n  -> number\n  2. number\n```",
						"",
						"Yields the current thread until the specified amount of `seconds` have elapsed."
					].join("\n")
				},
			},

			"xpcall()": {
				"insertText": "xpcall(${1:f}, ${2:err}, ${3:arg1}, ${4:...})",
				"documentation": {
					value: [
						"```lua\nfunction xpcall(f: function, err: function [, arg1: any, ...])\n  -> success: boolean\n	2. result: any\n	3. ...\n```",
						"",
						"Calls function `f` in protected mode with a new message handler."
					].join("\n")
				},
			},

			/**
			 * Madium Globals
			 */
			"identifyexecutor()": {
				"insertText": "identifyexecutor()",
				"documentation": {
					value: "```lua\nfunction identifyexecutor()\n  -> name: string, version: string\n```\nReturns the name and version of the executor."
				},
			},

			"getexecutorname()": {
				"insertText": "getexecutorname()",
				"documentation": {
					value: "```lua\nfunction getexecutorname()\n  -> string\n```\nAlias for identifyexecutor."
				},
			},

			"printidentity()": {
				"insertText": "printidentity()",
				"documentation": {
					value: "```lua\nfunction printidentity()\n```\nPrints the current thread identity to the console."
				},
			},

			"gethui()": {
				"insertText": "gethui()",
				"documentation": {
					value: "```lua\nfunction gethui()\n  -> Instance\n```\nReturns the hidden UI container (CoreGui)."
				},
			},

			"gethwid()": {
				"insertText": "gethwid()",
				"documentation": {
					value: "```lua\nfunction gethwid()\n  -> string\n```\nGets the hardware ID (HWID) of the local system."
				},
			},
			"setclipboard()": {
				"insertText": "setclipboard(${1:content})",
				"documentation": {
					value: "```lua\nfunction setclipboard(content: string)\n```\nSets content to the clipboard."
				},
			},
			"toclipboard()": {
				"insertText": "toclipboard(${1:content})",
				"documentation": {
					value: "```lua\nfunction toclipboard(content: string)\n```\nAlias for setclipboard."
				},
			},
			"setfpscap()": {
				"insertText": "setfpscap(${1:cap})",
				"documentation": {
					value: "```lua\nfunction setfpscap(cap: number)\n```\nSets the fps cap to cap."
				},
			},
			"getfpscap()": {
				"insertText": "getfpscap()",
				"documentation": {
					value: "```lua\nfunction getfpscap()\n  -> number\n```\nGets your FPS in-game."
				},
			},
			"request()": {
				"insertText": "request(${1:options})",
				"documentation": {
					value: "```lua\nfunction request(options: table)\n  -> response: table\n```\nSends an HTTP request."
				},
			},
			"http_request()": {
				"insertText": "http_request(${1:options})",
				"documentation": {
					value: "```lua\nfunction http_request(options: table)\n  -> response: table\n```\nAlias for request."
				},
			},
			"writefile()": {
				"insertText": "writefile(${1:path}, ${2:content})",
				"documentation": {
					value: "```lua\nfunction writefile(path: string, content: string)\n```\nWrites content to the supplied path."
				},
			},
			"readfile()": {
				"insertText": "readfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction readfile(path: string)\n  -> string\n```\nReturns the contents of the file located at path."
				},
			},
			"appendfile()": {
				"insertText": "appendfile(${1:path}, ${2:content})",
				"documentation": {
					value: "```lua\nfunction appendfile(path: string, content: string)\n```\nAppends content to the file contents at path."
				},
			},
			"isfile()": {
				"insertText": "isfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction isfile(path: string)\n  -> boolean\n```\nReturns true if path is a file."
				},
			},
			"isfolder()": {
				"insertText": "isfolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction isfolder(path: string)\n  -> boolean\n```\nReturns true if path is a folder."
				},
			},
			"listfiles()": {
				"insertText": "listfiles(${1:folder})",
				"documentation": {
					value: "```lua\nfunction listfiles(folder: string)\n  -> table\n```\nReturns a table of all files in folder."
				},
			},
			"makefolder()": {
				"insertText": "makefolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction makefolder(path: string)\n```\nCreates a new folder at path."
				},
			},
			"delfile()": {
				"insertText": "delfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction delfile(path: string)\n```\nDeletes the file located at path."
				},
			},
			"delfolder()": {
				"insertText": "delfolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction delfolder(path: string)\n```\nDeletes the folder located at path."
				},
			},
			"getgenv()": {
				"insertText": "getgenv()",
				"documentation": {
					value: "```lua\nfunction getgenv()\n  -> table\n```\nReturns the global environment of the executor."
				},
			},
			"getrenv()": {
				"insertText": "getrenv()",
				"documentation": {
					value: "```lua\nfunction getrenv()\n  -> table\n```\nReturns the Roblox environment."
				},
			},
			"getreg()": {
				"insertText": "getreg()",
				"documentation": {
					value: "```lua\nfunction getreg()\n  -> table\n```\nReturns the Lua registry."
				},
			},
			"getgc()": {
				"insertText": "getgc(${1:includeTables})",
				"documentation": {
					value: "```lua\nfunction getgc(includeTables: boolean?)\n  -> table\n```\nReturns all garbage collected objects."
				},
			},
			"getinstances()": {
				"insertText": "getinstances()",
				"documentation": {
					value: "```lua\nfunction getinstances()\n  -> table\n```\nReturns all instances in the game."
				},
			},
			"getnilinstances()": {
				"insertText": "getnilinstances()",
				"documentation": {
					value: "```lua\nfunction getnilinstances()\n  -> table\n```\nReturns all instances parented to nil."
				},
			},
			"getscripts()": {
				"insertText": "getscripts()",
				"documentation": {
					value: "```lua\nfunction getscripts()\n  -> table\n```\nReturns all scripts in the game."
				},
			},
			"getloadedmodules()": {
				"insertText": "getloadedmodules()",
				"documentation": {
					value: "```lua\nfunction getloadedmodules()\n  -> table\n```\nReturns all loaded ModuleScripts."
				},
			},
			"checkcaller()": {
				"insertText": "checkcaller()",
				"documentation": {
					value: "```lua\nfunction checkcaller()\n  -> boolean\n```\nReturns true if the current thread is an executor thread."
				},
			},
			"islclosure()": {
				"insertText": "islclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction islclosure(f: function)\n  -> boolean\n```\nReturns true if the function is a Lua closure."
				},
			},
			"iscclosure()": {
				"insertText": "iscclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction iscclosure(f: function)\n  -> boolean\n```\nReturns true if the function is a C closure."
				},
			},
			"newcclosure()": {
				"insertText": "newcclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction newcclosure(f: function)\n  -> function\n```\nWraps a Lua function in a C closure."
				},
			},
			"hookfunction()": {
				"insertText": "hookfunction(${1:f}, ${2:hook})",
				"documentation": {
					value: "```lua\nfunction hookfunction(f: function, hook: function)\n  -> function\n```\nHooks a function and returns the original."
				},
			},
			"replaceclosure()": {
				"insertText": "replaceclosure(${1:f}, ${2:hook})",
				"documentation": {
					value: "```lua\nfunction replaceclosure(f: function, hook: function)\n```\nAlias for hookfunction."
				},
			},
			"getrawmetatable()": {
				"insertText": "getrawmetatable(${1:object})",
				"documentation": {
					value: "```lua\nfunction getrawmetatable(object: any)\n  -> table\n```\nReturns the raw metatable of an object."
				},
			},
			"setrawmetatable()": {
				"insertText": "setrawmetatable(${1:object}, ${2:metatable})",
				"documentation": {
					value: "```lua\nfunction setrawmetatable(object: any, metatable: table)\n```\nSets the raw metatable of an object."
				},
			},
			"setreadonly()": {
				"insertText": "setreadonly(${1:table}, ${2:readonly})",
				"documentation": {
					value: "```lua\nfunction setreadonly(table: table, readonly: boolean)\n```\nSets the readonly state of a table."
				},
			},
			"isreadonly()": {
				"insertText": "isreadonly(${1:table})",
				"documentation": {
					value: "```lua\nfunction isreadonly(table: table)\n  -> boolean\n```\nReturns true if the table is readonly."
				},
			},
			"getnamecallmethod()": {
				"insertText": "getnamecallmethod()",
				"documentation": {
					value: "```lua\nfunction getnamecallmethod()\n  -> string\n```\nReturns the namecall method in an __namecall metatable hook."
				},
			},
			"setnamecallmethod()": {
				"insertText": "setnamecallmethod(${1:method})",
				"documentation": {
					value: "```lua\nfunction setnamecallmethod(method: string)\n```\nSets the current namecall method."
				},
			},

			"printconsole()": {
				"insertText": "printconsole(${1:message}, ${2:red}, ${3:green}, ${4:blue})",
				"documentation": {
					value: "```lua\nfunction printconsole(message: string, red: number, green: number, blue: number)\n```\nPrints message into the internal and integrated console with RGB value."
				},
			},

			"rconsoleprint()": {
				"insertText": "rconsoleprint(${1:message})",
				"documentation": {
					value: "```lua\nfunction rconsoleprint(message: string)\n```\nPrints message into the external console."
				},
			},

			"rconsoleinfo()": {
				"insertText": "rconsoleinfo(${1:message})",
				"documentation": {
					value: "```lua\nfunction rconsoleinfo(message: string)\n```\nPrints an info message into the external console."
				},
			},

			"rconsolewarn()": {
				"insertText": "rconsolewarn(${1:message})",
				"documentation": {
					value: "```lua\nfunction rconsolewarn(message: string)\n```\nPrints a warning message into the external console."
				},
			},

			"rconsoleerr()": {
				"insertText": "rconsoleerr(${1:message})",
				"documentation": {
					value: "```lua\nfunction rconsoleerr(message: string)\n```\nPrints an error message into the external console."
				},
			},

			"rconsoleclear()": {
				"insertText": "rconsoleclear()",
				"documentation": {
					value: "```lua\nfunction rconsoleclear()\n```\nClears the external console."
				},
			},

			"rconsolename()": {
				"insertText": "rconsolename(${1:title})",
				"documentation": {
					value: "```lua\nfunction rconsolename(title: string)\n```\nSets the external console's title."
				},
			},

			"rconsoleclose()": {
				"insertText": "rconsoleclose()",
				"documentation": {
					value: "```lua\nfunction rconsoleclose()\n```\nCloses the external console."
				},
			},

			"rconsolecreate()": {
				"insertText": "rconsolecreate()",
				"documentation": {
					value: "```lua\nfunction rconsolecreate()\n```\nCreates the external console."
				},
			},

			"getcallstack()": {
				"insertText": "getcallstack()",
				"documentation": {
					value: "```lua\nfunction getcallstack()\n  -> table\n```\nReturns the current call stack."
				},
			},

			"getconnections()": {
				"insertText": "getconnections(${1:signal})",
				"documentation": {
					value: "```lua\nfunction getconnections(signal: RBXScriptSignal)\n  -> table\n```\nReturns all connections for the signal."
				},
			},

			"getcallbackvalue()": {
				"insertText": "getcallbackvalue(${1:object}, ${2:property})",
				"documentation": {
					value: "```lua\nfunction getcallbackvalue(object: Instance, property: string)\n  -> function\n```\nReturns the callback function for a property."
				},
			},

			"gethiddenproperty()": {
				"insertText": "gethiddenproperty(${1:object}, ${2:property})",
				"documentation": {
					value: "```lua\nfunction gethiddenproperty(object: Instance, property: string)\n  -> any, boolean\n```\nReturns the value of a hidden property and whether it was found."
				},
			},

			"sethiddenproperty()": {
				"insertText": "sethiddenproperty(${1:object}, ${2:property}, ${3:value})",
				"documentation": {
					value: "```lua\nfunction sethiddenproperty(object: Instance, property: string, value: any)\n  -> boolean\n```\nSets the value of a hidden property."
				},
			},

			"getpenv()": {
				"insertText": "getpenv(${1:script})",
				"documentation": {
					value: "```lua\nfunction getpenv(script: LuaSourceContainer)\n  -> table\n```\nReturns the environment of a script."
				},
			},

			"getscripthash()": {
				"insertText": "getscripthash(${1:script})",
				"documentation": {
					value: "```lua\nfunction getscripthash(script: LuaSourceContainer)\n  -> string\n```\nReturns a hash of the script's bytecode."
				},
			},

			"getscriptbytecode()": {
				"insertText": "getscriptbytecode(${1:script})",
				"documentation": {
					value: "```lua\nfunction getscriptbytecode(script: LuaSourceContainer)\n  -> string\n```\nReturns the script's bytecode."
				},
			},

			"getrawmetatable()": {
				"insertText": "getrawmetatable(${1:object})",
				"documentation": {
					value: "```lua\nfunction getrawmetatable(object: any)\n  -> table\n```\nReturns the raw metatable of an object."
				},
			},

			"setrawmetatable()": {
				"insertText": "setrawmetatable(${1:object}, ${2:metatable})",
				"documentation": {
					value: "```lua\nfunction setrawmetatable(object: any, metatable: table)\n```\nSets the raw metatable of an object."
				},
			},

			"setreadonly()": {
				"insertText": "setreadonly(${1:table}, ${2:readonly})",
				"documentation": {
					value: "```lua\nfunction setreadonly(table: table, readonly: boolean)\n```\nSets the readonly state of a table."
				},
			},

			"isreadonly()": {
				"insertText": "isreadonly(${1:table})",
				"documentation": {
					value: "```lua\nfunction isreadonly(table: table)\n  -> boolean\n```\nReturns true if the table is readonly."
				},
			},

			"checkclosure()": {
				"insertText": "checkclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction checkclosure(f: function)\n  -> boolean\n```\nReturns true if the function is an executor closure."
				},
			},

			"isexecutorclosure()": {
				"insertText": "isexecutorclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction isexecutorclosure(f: function)\n  -> boolean\n```\nAlias for checkclosure."
				},
			},

			"clonefunction()": {
				"insertText": "clonefunction(${1:f})",
				"documentation": {
					value: "```lua\nfunction clonefunction(f: function)\n  -> function\n```\nReturns a copy of the function."
				},
			},

			"getrenv()": {
				"insertText": "getrenv()",
				"documentation": {
					value: "```lua\nfunction getrenv()\n  -> table\n```\nReturns the Roblox environment."
				},
			},

			"getgenv()": {
				"insertText": "getgenv()",
				"documentation": {
					value: "```lua\nfunction getgenv()\n  -> table\n```\nReturns the global environment of the executor."
				},
			},

			"getreg()": {
				"insertText": "getreg()",
				"documentation": {
					value: "```lua\nfunction getreg()\n  -> table\n```\nReturns the Lua registry."
				},
			},

			"getgc()": {
				"insertText": "getgc(${1:includeTables})",
				"documentation": {
					value: "```lua\nfunction getgc(includeTables: boolean?)\n  -> table\n```\nReturns all garbage collected objects."
				},
			},

			"getinstances()": {
				"insertText": "getinstances()",
				"documentation": {
					value: "```lua\nfunction getinstances()\n  -> table\n```\nReturns all instances in the game."
				},
			},

			"getnilinstances()": {
				"insertText": "getnilinstances()",
				"documentation": {
					value: "```lua\nfunction getnilinstances()\n  -> table\n```\nReturns all instances parented to nil."
				},
			},

			"getscripts()": {
				"insertText": "getscripts()",
				"documentation": {
					value: "```lua\nfunction getscripts()\n  -> table\n```\nReturns all scripts in the game."
				},
			},

			"getloadedmodules()": {
				"insertText": "getloadedmodules()",
				"documentation": {
					value: "```lua\nfunction getloadedmodules()\n  -> table\n```\nReturns all loaded ModuleScripts."
				},
			},

			"checkcaller()": {
				"insertText": "checkcaller()",
				"documentation": {
					value: "```lua\nfunction checkcaller()\n  -> boolean\n```\nReturns true if the current thread is an executor thread."
				},
			},

			"islclosure()": {
				"insertText": "islclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction islclosure(f: function)\n  -> boolean\n```\nReturns true if the function is a Lua closure."
				},
			},

			"iscclosure()": {
				"insertText": "iscclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction iscclosure(f: function)\n  -> boolean\n```\nReturns true if the function is a C closure."
				},
			},

			"newcclosure()": {
				"insertText": "newcclosure(${1:f})",
				"documentation": {
					value: "```lua\nfunction newcclosure(f: function)\n  -> function\n```\nWraps a Lua function in a C closure."
				},
			},

			"hookfunction()": {
				"insertText": "hookfunction(${1:f}, ${2:hook})",
				"documentation": {
					value: "```lua\nfunction hookfunction(f: function, hook: function)\n  -> function\n```\nHooks a function and returns the original."
				},
			},

			"replaceclosure()": {
				"insertText": "replaceclosure(${1:f}, ${2:hook})",
				"documentation": {
					value: "```lua\nfunction replaceclosure(f: function, hook: function)\n```\nAlias for hookfunction."
				},
			},

			"hookmetamethod()": {
				"insertText": "hookmetamethod(${1:object}, ${2:metamethod}, ${3:hook})",
				"documentation": {
					value: "```lua\nfunction hookmetamethod(object: any, metamethod: string, hook: function)\n  -> function\n```\nHooks a metamethod and returns the original."
				},
			},

			"restorefunction()": {
				"insertText": "restorefunction(${1:f})",
				"documentation": {
					value: "```lua\nfunction restorefunction(f: function)\n```\nRestores a hooked function."
				},
			},

			"getnamecallmethod()": {
				"insertText": "getnamecallmethod()",
				"documentation": {
					value: "```lua\nfunction getnamecallmethod()\n  -> string\n```\nReturns the namecall method in an __namecall metatable hook."
				},
			},

			"setnamecallmethod()": {
				"insertText": "setnamecallmethod(${1:method})",
				"documentation": {
					value: "```lua\nfunction setnamecallmethod(method: string)\n```\nSets the current namecall method."
				},
			},

			"loadfile()": {
				"insertText": "loadfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction loadfile(path: string)\n  -> function\n```\nLoads a file as a Lua function."
				},
			},

			"dofile()": {
				"insertText": "dofile(${1:path})",
				"documentation": {
					value: "```lua\nfunction dofile(path: string)\n```\nExecutes a file."
				},
			},

			"getcustomasset()": {
				"insertText": "getcustomasset(${1:path})",
				"documentation": {
					value: "```lua\nfunction getcustomasset(path: string)\n  -> string\n```\nReturns a Content ID for a local file."
				},
			},

			"getsenv()": {
				"insertText": "getsenv(${1:script})",
				"documentation": {
					value: "```lua\nfunction getsenv(script: LuaSourceContainer)\n  -> table\n```\nReturns the environment of a script."
				},
			},

			"getthreadidentity()": {
				"insertText": "getthreadidentity()",
				"documentation": {
					value: "```lua\nfunction getthreadidentity()\n  -> number\n```\nReturns the current thread identity."
				},
			},

			"setthreadidentity()": {
				"insertText": "setthreadidentity(${1:identity})",
				"documentation": {
					value: "```lua\nfunction setthreadidentity(identity: number)\n```\nSets the current thread identity."
				},
			},

			"getidentity()": {
				"insertText": "getidentity()",
				"documentation": {
					value: "```lua\nfunction getidentity()\n  -> number\n```\nAlias for getthreadidentity."
				},
			},

			"setidentity()": {
				"insertText": "setidentity(${1:identity})",
				"documentation": {
					value: "```lua\nfunction setidentity(identity: number)\n```\nAlias for setthreadidentity."
				},
			},

			"getscriptenvs()": {
				"insertText": "getscriptenvs()",
				"documentation": {
					value: "```lua\nfunction getscriptenvs()\n  -> table\n```\nReturns all script environments."
				},
			},

			"getrunningscripts()": {
				"insertText": "getrunningscripts()",
				"documentation": {
					value: "```lua\nfunction getrunningscripts()\n  -> table\n```\nReturns all running scripts."
				},
			},

			"getproto()": {
				"insertText": "getproto(${1:f}, ${2:index}, ${3:includeTables})",
				"documentation": {
					value: "```lua\nfunction getproto(f: function, index: number, includeTables: boolean?)\n  -> function | table\n```\nReturns a function's prototype."
				},
			},

			"getprotos()": {
				"insertText": "getprotos(${1:f})",
				"documentation": {
					value: "```lua\nfunction getprotos(f: function)\n  -> table\n```\nReturns all prototypes of a function."
				},
			},

			"getconstant()": {
				"insertText": "getconstant(${1:f}, ${2:index})",
				"documentation": {
					value: "```lua\nfunction getconstant(f: function, index: number)\n  -> any\n```\nReturns a constant at an index."
				},
			},

			"getconstants()": {
				"insertText": "getconstants(${1:f})",
				"documentation": {
					value: "```lua\nfunction getconstants(f: function)\n  -> table\n```\nReturns all constants of a function."
				},
			},

			"setconstant()": {
				"insertText": "setconstant(${1:f}, ${2:index}, ${3:value})",
				"documentation": {
					value: "```lua\nfunction setconstant(f: function, index: number, value: any)\n```\nSets a constant at an index."
				},
			},

			"getupvalue()": {
				"insertText": "getupvalue(${1:f}, ${2:index})",
				"documentation": {
					value: "```lua\nfunction getupvalue(f: function, index: number)\n  -> any\n```\nReturns an upvalue at an index."
				},
			},

			"getupvalues()": {
				"insertText": "getupvalues(${1:f})",
				"documentation": {
					value: "```lua\nfunction getupvalues(f: function)\n  -> table\n```\nReturns all upvalues of a function."
				},
			},

			"setupvalue()": {
				"insertText": "setupvalue(${1:f}, ${2:index}, ${3:value})",
				"documentation": {
					value: "```lua\nfunction setupvalue(f: function, index: number, value: any)\n```\nSets an upvalue at an index."
				},
			},

			"getstack()": {
				"insertText": "getstack(${1:level}, ${2:index})",
				"documentation": {
					value: "```lua\nfunction getstack(level: number, index: number?)\n  -> any | table\n```\nReturns the stack at a level."
				},
			},

			"setstack()": {
				"insertText": "setstack(${1:level}, ${2:index}, ${3:value})",
				"documentation": {
					value: "```lua\nfunction setstack(level: number, index: number, value: any)\n```\nSets the stack value at an index."
				},
			},

			"setclipboard()": {
				"insertText": "setclipboard(${1:content})",
				"documentation": {
					value: "```lua\nfunction setclipboard(content: string)\n```\nSets content to the clipboard."
				},
			},

			"toclipboard()": {
				"insertText": "toclipboard(${1:content})",
				"documentation": {
					value: "```lua\nfunction toclipboard(content: string)\n```\nAlias for setclipboard."
				},
			},

			"setfpscap()": {
				"insertText": "setfpscap(${1:cap})",
				"documentation": {
					value: "```lua\nfunction setfpscap(cap: number)\n```\nSets the fps cap to cap."
				},
			},

			"getfpscap()": {
				"insertText": "getfpscap()",
				"documentation": {
					value: "```lua\nfunction getfpscap()\n  -> number\n```\nGets your FPS in-game."
				},
			},

			"request()": {
				"insertText": "request(${1:options})",
				"documentation": {
					value: "```lua\nfunction request(options: table)\n  -> response: table\n```\nSends an HTTP request."
				},
			},

			"http_request()": {
				"insertText": "http_request(${1:options})",
				"documentation": {
					value: "```lua\nfunction http_request(options: table)\n  -> response: table\n```\nAlias for request."
				},
			},

			"writefile()": {
				"insertText": "writefile(${1:path}, ${2:content})",
				"documentation": {
					value: "```lua\nfunction writefile(path: string, content: string)\n```\nWrites content to the supplied path."
				},
			},

			"readfile()": {
				"insertText": "readfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction readfile(path: string)\n  -> string\n```\nReturns the contents of the file located at path."
				},
			},

			"appendfile()": {
				"insertText": "appendfile(${1:path}, ${2:content})",
				"documentation": {
					value: "```lua\nfunction appendfile(path: string, content: string)\n```\nAppends content to the file contents at path."
				},
			},

			"isfile()": {
				"insertText": "isfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction isfile(path: string)\n  -> boolean\n```\nReturns true if path is a file."
				},
			},

			"isfolder()": {
				"insertText": "isfolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction isfolder(path: string)\n  -> boolean\n```\nReturns true if path is a folder."
				},
			},

			"listfiles()": {
				"insertText": "listfiles(${1:folder})",
				"documentation": {
					value: "```lua\nfunction listfiles(folder: string)\n  -> table\n```\nReturns a table of all files in folder."
				},
			},

			"makefolder()": {
				"insertText": "makefolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction makefolder(path: string)\n```\nCreates a new folder at path."
				},
			},

			"delfile()": {
				"insertText": "delfile(${1:path})",
				"documentation": {
					value: "```lua\nfunction delfile(path: string)\n```\nDeletes the file located at path."
				},
			},

			"delfolder()": {
				"insertText": "delfolder(${1:path})",
				"documentation": {
					value: "```lua\nfunction delfolder(path: string)\n```\nDeletes the folder located at path."
				},
			},
			
			"identifyexecutor()": {
				"insertText": "identifyexecutor()",
				"documentation": {
					value: "```lua\nfunction identifyexecutor()\n  -> name: string, version: string\n```\nReturns the name and version of the executor."
				},
			},

			"getexecutorname()": {
				"insertText": "getexecutorname()",
				"documentation": {
					value: "```lua\nfunction getexecutorname()\n  -> string\n```\nAlias for identifyexecutor."
				},
			},

			"printidentity()": {
				"insertText": "printidentity()",
				"documentation": {
					value: "```lua\nfunction printidentity()\n```\nPrints the current thread identity to the console."
				},
			},

			"gethui()": {
				"insertText": "gethui()",
				"documentation": {
					value: "```lua\nfunction gethui()\n  -> Instance\n```\nReturns the hidden UI container (CoreGui)."
				},
			},

			"gethwid()": {
				"insertText": "gethwid()",
				"documentation": {
					value: "```lua\nfunction gethwid()\n  -> string\n```\nGets the hardware ID (HWID) of the local system."
				},
			},
		},
	};
});
