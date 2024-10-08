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
exports.Button = void 0;
var writeLine_1 = require("../../functions/writeLine");
var _1 = require(".");
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button
 * @extends Hub
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(variableName) {
        var _this = _super.call(this) || this;
        if (!variableName) {
            _this.variableName = "button";
        }
        else {
            _this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = button"), "code");
        }
        (0, writeLine_1.writeLine)("from hub import button", "imports");
        return _this;
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button-func-pressed
     * @param button A button from the button submodule in the hub module
     */
    Button.prototype.pressed = function (button) { };
    return Button;
}(_1.Hub));
exports.Button = Button;
