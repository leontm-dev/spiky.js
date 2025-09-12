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
exports.Display = void 0;
var _1 = require(".");
// Code
/**
 * The display module is used show images in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display
 */
var Display = /** @class */ (function (_super) {
    __extends(Display, _super);
    function Display() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-hide
     */
    Display.hide = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-image
     * @param image The id of the image to show. The range of available images is 1 to 21. There are consts on the display module for these
     */
    Display.image = function (image) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-show
     * @param fullscreen Show in full screen
     */
    Display.show = function (fullscreen) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-text
     * @param text The text to display
     */
    Display.text = function (text) { };
    Display.IMAGE_ROBOT_1 = 1;
    Display.IMAGE_ROBOT_2 = 2;
    Display.IMAGE_ROBOT_3 = 3;
    Display.IMAGE_ROBOT_4 = 4;
    Display.IMAGE_ROBOT_5 = 5;
    Display.IMAGE_HUB_1 = 6;
    Display.IMAGE_HUB_2 = 7;
    Display.IMAGE_HUB_3 = 8;
    Display.IMAGE_HUB_4 = 9;
    Display.IMAGE_AMUSEMENT_PARK = 10;
    Display.IMAGE_BEACH = 11;
    Display.IMAGE_HAUNTED_HOUSE = 12;
    Display.IMAGE_CARNIVAL = 13;
    Display.IMAGE_BOOKSHELF = 14;
    Display.IMAGE_PLAYGROUND = 15;
    Display.IMAGE_MOON = 16;
    Display.IMAGE_CAVE = 17;
    Display.IMAGE_OCEAN = 18;
    Display.IMAGE_POLAR_BEAR = 19;
    Display.IMAGE_PARK = 20;
    Display.IMAGE_RANDOM = 21;
    return Display;
}(_1.App));
exports.Display = Display;
