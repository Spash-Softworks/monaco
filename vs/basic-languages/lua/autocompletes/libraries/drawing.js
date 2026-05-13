define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	const DrawingObjectChildren = {
		"Property": {
			"Visible": { "documentation": { "value": "Whether the object is visible." } },
			"ZIndex": { "documentation": { "value": "The render order of the object." } },
			"Transparency": { "documentation": { "value": "The transparency of the object (0-1)." } },
			"Color": { "documentation": { "value": "The Color3 of the object." } },
			// Line specific
			"From": { "documentation": { "value": "The starting Vector2 position (Line only)." } },
			"To": { "documentation": { "value": "The ending Vector2 position (Line only)." } },
			"Thickness": { "documentation": { "value": "The thickness of the line or border." } },
			// Text specific
			"Text": { "documentation": { "value": "The string text to display (Text only)." } },
			"Size": { "documentation": { "value": "The font size (Text) or radius (Circle) or Vector2 size (Square)." } },
			"Center": { "documentation": { "value": "Whether to center the text (Text) or the Vector2 position (Circle)." } },
			"Outline": { "documentation": { "value": "Whether to show an outline (Text/Circle/Square)." } },
			"OutlineColor": { "documentation": { "value": "The Color3 of the outline." } },
			"Position": { "documentation": { "value": "The Vector2 position of the object." } },
			"Font": { "documentation": { "value": "The font to use (Text only)." } },
			// Square/Circle/Triangle specific
			"Filled": { "documentation": { "value": "Whether the object is filled." } },
			// Triangle specific
			"PointA": { "documentation": { "value": "The first point of the triangle." } },
			"PointB": { "documentation": { "value": "The second point of the triangle." } },
			"PointC": { "documentation": { "value": "The third point of the triangle." } },
			// Image specific
			"Data": { "documentation": { "value": "The binary string data of the image." } },
			"Rounding": { "documentation": { "value": "The corner rounding of the square." } }
		},
		"Method": {
			"Remove()": { "insertText": "Remove()", "documentation": { "value": "Removes the drawing object." } },
			"Destroy()": { "insertText": "Destroy()", "documentation": { "value": "Alias for Remove." } }
		}
	};

	exports.autocompletes = {
		"Function": {
			"new()": {
				"insertText": "new(${1:type})",
				"documentation": {
					value: [
						"```lua\nfunction new(type: string)\n  -> DrawingObject\n```",
						"",
						"Creates a new Drawing object of the specified type.",
						"",
						"**Types:**",
						"- `Line`",
						"- `Text`",
						"- `Circle`",
						"- `Square`",
						"- `Triangle`",
						"- `Image`"
					].join("\n")
				},
				"__children__": DrawingObjectChildren
			},
			"clear()": {
				"insertText": "clear()",
				"documentation": {
					value: "```lua\nfunction clear()\n```\nClears all drawing objects."
				}
			}
		},
		"Field": {
			"Fonts": {
				"__children__": {
					"Field": {
						"UI": { "documentation": { "value": "The default UI font." } },
						"System": { "documentation": { "value": "The system font." } },
						"Plex": { "documentation": { "value": "The Plex font." } },
						"Monospace": { "documentation": { "value": "The Monospace font." } }
					}
				}
			}
		}
	};
});
