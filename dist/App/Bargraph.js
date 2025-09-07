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
exports.Bargraph = void 0;
var _1 = require(".");
// Code
/**
 * The bargraph module is used make bar graphs in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph
 */
var Bargraph = /** @class */ (function (_super) {
    __extends(Bargraph, _super);
    function Bargraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-change
     * @param color A color from the color module
     * @param value The value
     */
    Bargraph.change = function (color, value) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-clear_all
     */
    Bargraph.clearAll = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-get_value
     * @param color A color from the color module
     */
    Bargraph.getValue = function (color) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-hide
     */
    Bargraph.hide = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-set_value
     * @param color A color from the color module
     * @param float The value
     */
    Bargraph.setValue = function (color, float) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-show
     * @param fullscreen Show in full screen
     */
    Bargraph.show = function (fullscreen) { };
    return Bargraph;
}(_1.App));
exports.Bargraph = Bargraph;
