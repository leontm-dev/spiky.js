"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorMatrix = void 0;
var writeLine_1 = require("../functions/writeLine");
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix
 */
var ColorMatrix = /** @class */ (function () {
    function ColorMatrix(variableName) {
        if (!variableName) {
            this.variableName = "color_matrix";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = color_matrix"), "code");
        }
        (0, writeLine_1.writeLine)("import color_matrix", "imports");
    }
    /**
     * Turn off all pixels on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-clear
     * @param port A port from the port submodule in the hub module
     */
    ColorMatrix.prototype.clear = function (port) {
        (0, writeLine_1.writeLine)("".concat(this.variableName, ".clear(port=").concat(port, ")"), "code");
    };
    /**
     * Retrieve a specific pixel represented as a tuple containing the color and intensity
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-get_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     */
    ColorMatrix.prototype.getPixel = function (port, x, y) {
        if (x < 0 || x > 2) {
            throw new Error("X value must be in the range 0 - 2");
        }
        if (y < 0 || y > 2) {
            throw new Error("Y value must be in the range 0 - 2");
        }
        (0, writeLine_1.writeLine)("".concat(this.variableName, ".get_pixel(port=").concat(port, ", x=").concat(x, ", y=").concat(y, ")"), "code");
    };
    /**
     * Change a single pixel on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-set_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     * @param pixel Tuple containing color and intensity, meaning how bright to light up the pixel
     */
    ColorMatrix.prototype.setPixel = function (port, x, y, pixel) {
        if (x < 0 || x > 2) {
            throw new Error("X value must be in the range 0 - 2");
        }
        if (y < 0 || y > 2) {
            throw new Error("Y value must be in the range 0 - 2");
        }
        (0, writeLine_1.writeLine)("".concat(this.variableName, ".set_pixel(port=").concat(port, ", x=").concat(x, ", y=").concat(y, ", pixel=").concat(pixel, ")"), "code");
    };
    /**
     * Change all pixels at once on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-show
     * @param port A port from the port submodule in the hub module
     * @param pixels A list containing color and intensity value tuples for all 9 pixels.
     */
    ColorMatrix.prototype.show = function (port, pixels) {
        if (pixels.length > 9) {
            throw new Error("You can only set 9 pixels at a time");
        }
        (0, writeLine_1.writeLine)("".concat(this.variableName, ".show(port=").concat(port, ", pixels=").concat(pixels, ")"), "code");
    };
    return ColorMatrix;
}());
exports.ColorMatrix = ColorMatrix;
