"use strict";
// Imports
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightMatrix = void 0;
var _1 = require(".");
var writeLine_1 = require("../../functions/writeLine");
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix
 * @extends Hub
 */
var LightMatrix = /** @class */ (function (_super) {
    __extends(LightMatrix, _super);
    function LightMatrix(variableName) {
        var _this = _super.call(this) || this;
        if (!variableName) {
            _this.variableName = "light_matrix";
        }
        else {
            _this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = light_matrix"), "code");
        }
        (0, writeLine_1.writeLine)("from hub import light_matrix", "imports");
        return _this;
    }
    /**
     * Switches off all of the pixels on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-clear
     */
    LightMatrix.prototype.clear = function () { };
    /**
     * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
     */
    LightMatrix.prototype.getOrientation = function () { };
    /**
     * Retrieve the intensity of a specific pixel on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     */
    LightMatrix.prototype.getPixel = function (x, y) {
        if (x < 0 || x > 4) {
            throw new Error("X value must be in range 0 to 4");
        }
        if (y < 0 || y > 4) {
            throw new Error("Y value must be in range 0 to 4");
        }
    };
    /**
     * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
     * @param top The side of the hub to be the top
     */
    LightMatrix.prototype.setOrientation = function (top) { };
    /**
     * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     * @param intensity How bright to light up the pixel
     */
    LightMatrix.prototype.setPixel = function (x, y, intensity) {
        if (x < 0 || x > 4) {
            throw new Error("X value must be in range 0 to 4");
        }
        if (y < 0 || y > 4) {
            throw new Error("Y value must be in range 0 to 4");
        }
    };
    /**
     * Change all the lights at the same time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
     * @param pixels A list containing light intensity values for all 25 pixels.
     */
    LightMatrix.prototype.show = function (pixels) {
        if (pixels.length > 25) {
            throw new Error("Pixels list can not contain more than 25 values");
        }
    };
    /**
     * Display one of the built in images on the display.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
     * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
     */
    LightMatrix.prototype.showImage = function (image) { };
    /**
     * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
     * @param text The text to display
     * @param intensity How bright to light up the pixel
     * @param timePerCharacter How long to show each character on the display
     */
    LightMatrix.prototype.write = function (text, intensity, timePerCharacter) {
        if (intensity && (intensity < 0 || intensity > 100)) {
            throw new Error("Intensity must be in range 0 to 100");
        }
        if (intensity === undefined) {
            intensity = 100;
        }
        if (timePerCharacter && timePerCharacter < 0) {
            throw new Error("Time per character must be a positive number");
        }
        if (timePerCharacter === undefined) {
            timePerCharacter = 500;
        }
    };
    return LightMatrix;
}(_1.Hub));
exports.LightMatrix = LightMatrix;
