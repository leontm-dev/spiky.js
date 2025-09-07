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
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix
 * @extends Hub
 */
var LightMatrix = /** @class */ (function (_super) {
    __extends(LightMatrix, _super);
    function LightMatrix() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IMAGE_HEART = 1;
        _this.IMAGE_HEART_SMALL = 2;
        _this.IMAGE_HAPPY = 3;
        _this.IMAGE_SMILE = 4;
        _this.IMAGE_SAD = 5;
        _this.IMAGE_CONFUSED = 6;
        _this.IMAGE_ANGRY = 7;
        _this.IMAGE_ASLEEP = 8;
        _this.IMAGE_SURPRISED = 9;
        _this.IMAGE_SILLY = 10;
        _this.IMAGE_FABULOUS = 11;
        _this.IMAGE_MEH = 12;
        _this.IMAGE_YES = 13;
        _this.IMAGE_NO = 14;
        _this.IMAGE_CLOCK12 = 15;
        _this.IMAGE_CLOCK1 = 16;
        _this.IMAGE_CLOCK2 = 17;
        _this.IMAGE_CLOCK3 = 18;
        _this.IMAGE_CLOCK4 = 19;
        _this.IMAGE_CLOCK5 = 20;
        _this.IMAGE_CLOCK6 = 21;
        _this.IMAGE_CLOCK7 = 22;
        _this.IMAGE_CLOCK8 = 23;
        _this.IMAGE_CLOCK9 = 24;
        _this.IMAGE_CLOCK10 = 25;
        _this.IMAGE_CLOCK11 = 26;
        _this.IMAGE_ARROW_N = 27;
        _this.IMAGE_ARROW_NE = 28;
        _this.IMAGE_ARROW_E = 29;
        _this.IMAGE_ARROW_SE = 30;
        _this.IMAGE_ARROW_S = 31;
        _this.IMAGE_ARROW_SW = 32;
        _this.IMAGE_ARROW_W = 33;
        _this.IMAGE_ARROW_NW = 34;
        _this.IMAGE_GO_RIGHT = 35;
        _this.IMAGE_GO_LEFT = 36;
        _this.IMAGE_GO_UP = 37;
        _this.IMAGE_GO_DOWN = 38;
        _this.IMAGE_TRIANGLE = 39;
        _this.IMAGE_TRIANGLE_LEFT = 40;
        _this.IMAGE_CHESSBOARD = 41;
        _this.IMAGE_DIAMOND = 42;
        _this.IMAGE_DIAMOND_SMALL = 43;
        _this.IMAGE_SQUARE = 44;
        _this.IMAGE_SQUARE_SMALL = 45;
        _this.IMAGE_RABBIT = 46;
        _this.IMAGE_COW = 47;
        _this.IMAGE_MUSIC_CROTCHET = 48;
        _this.IMAGE_MUSIC_QUAVER = 49;
        _this.IMAGE_MUSIC_QUAVERS = 50;
        _this.IMAGE_PITCHFORK = 51;
        _this.IMAGE_XMAS = 52;
        _this.IMAGE_PACMAN = 53;
        _this.IMAGE_TARGET = 54;
        _this.IMAGE_TSHIRT = 55;
        _this.IMAGE_ROLLERSKATE = 56;
        _this.IMAGE_DUCK = 57;
        _this.IMAGE_HOUSE = 58;
        _this.IMAGE_TORTOISE = 59;
        _this.IMAGE_BUTTERFLY = 60;
        _this.IMAGE_STICKFIGURE = 61;
        _this.IMAGE_GHOST = 62;
        _this.IMAGE_SWORD = 63;
        _this.IMAGE_GIRAFFE = 64;
        _this.IMAGE_SKULL = 65;
        _this.IMAGE_UMBRELLA = 66;
        _this.IMAGE_SNAKE = 67;
        return _this;
    }
    /**
     * Switches off all of the pixels on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-clear
     */
    LightMatrix.clear = function () { };
    /**
     * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
     */
    LightMatrix.getOrientation = function () {
        return 0;
    };
    /**
     * Retrieve the intensity of a specific pixel on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     */
    LightMatrix.getPixel = function (x, y) {
        return 0;
    };
    /**
     * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
     * @param top The side of the hub to be the top
     */
    LightMatrix.setOrientation = function (top) {
        return 0;
    };
    /**
     * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     * @param intensity How bright to light up the pixel
     */
    LightMatrix.setPixel = function (x, y, intensity) { };
    /**
     * Change all the lights at the same time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
     * @param pixels A list containing light intensity values for all 25 pixels.
     */
    LightMatrix.show = function (pixels) { };
    /**
     * Display one of the built in images on the display.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
     * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
     */
    LightMatrix.showImage = function (image) { };
    /**
     * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
     * @param text The text to display
     * @param intensity How bright to light up the pixel
     * @param timePerCharacter How long to show each character on the display
     */
    LightMatrix.write = function (text, intensity, timePerCharacter) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    return LightMatrix;
}(_1.Hub));
exports.LightMatrix = LightMatrix;
