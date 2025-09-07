"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorMatrix = void 0;
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix
 */
var ColorMatrix = /** @class */ (function () {
    function ColorMatrix() {
    }
    /**
     * Turn off all pixels on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-clear
     * @param port A port from the port submodule in the hub module
     */
    ColorMatrix.clear = function (port) { };
    /**
     * Retrieve a specific pixel represented as a tuple containing the color and intensity
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-get_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     */
    ColorMatrix.getPixel = function (port, x, y) {
        return [0, 0];
    };
    /**
     * Change a single pixel on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-set_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     * @param pixel Tuple containing color and intensity, meaning how bright to light up the pixel
     */
    ColorMatrix.setPixel = function (port, x, y, pixel) { };
    /**
     * Change all pixels at once on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-show
     * @param port A port from the port submodule in the hub module
     * @param pixels A list containing color and intensity value tuples for all 9 pixels.
     */
    ColorMatrix.show = function (port, pixels) { };
    return ColorMatrix;
}());
exports.ColorMatrix = ColorMatrix;
