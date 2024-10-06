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
exports.Light = void 0;
var writeLine_1 = require("../../functions/writeLine");
var _1 = require(".");
// Code
/**
 * The light module includes functions to change the color of the light on the SPIKE Prime hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light
 * @extends Hub
 */
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light(variableName) {
        var _this = _super.call(this) || this;
        if (!variableName) {
            _this.variableName = "light";
        }
        else {
            _this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = light"), "code");
        }
        (0, writeLine_1.writeLine)("from hub import light", "imports");
        return _this;
    }
    /**
     * Change the color of a light on the hub.
     * @param light The light on the hub
     * @param color A color from the color module
     */
    Light.prototype.color = function (light, color) { };
    return Light;
}(_1.Hub));
exports.Light = Light;
