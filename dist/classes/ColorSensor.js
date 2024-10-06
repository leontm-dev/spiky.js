"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSensor = void 0;
var writeLine_1 = require("../functions/writeLine");
// Code
/**
 * The color_sensor module enables you to write code that reacts to specific colors or the intensity of the reflected light.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor
 */
var ColorSensor = /** @class */ (function () {
    function ColorSensor(variableName) {
        if (!variableName) {
            this.variableName = "color_sensor";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(this.variableName, " = color_sensor"), "code");
        }
        (0, writeLine_1.writeLine)("import color_sensor", "imports");
    }
    /**
     * Returns the color value of the detected color. Use the color module to map the color value to a specific color.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-color
     * @param port A port from the port submodule in the hub module
     */
    ColorSensor.prototype.color = function (port) { };
    /**
     * Retrieves the intensity of the reflected light (0-100%).
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-reflection
     * @param port A port from the port submodule in the hub module
     */
    ColorSensor.prototype.reflection = function (port) { };
    /**
     * Retrieves the overall color intensity and intensity of red, green and blue.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-rgbi
     * @param port A port from the port submodule in the hub module
     * @returns Returns tuple[red: int, green: int, blue: int, intensity: int]
     */
    ColorSensor.prototype.rgbi = function (port) { };
    return ColorSensor;
}());
exports.ColorSensor = ColorSensor;
