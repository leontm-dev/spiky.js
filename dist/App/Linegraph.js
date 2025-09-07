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
exports.Linegraph = void 0;
var _1 = require(".");
// Code
/**
 * The linegraph module is used make line graphs in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph
 */
var Linegraph = /** @class */ (function (_super) {
    __extends(Linegraph, _super);
    function Linegraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-clear
     * @param color A color from the color module
     */
    Linegraph.clear = function (color) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-clear_all
     */
    Linegraph.clearAll = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_average
     * @param color A color from the color module
     */
    Linegraph.getAverage = function (color) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_last
     * @param color A color from the color module
     */
    Linegraph.getLast = function (color) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_max
     * @param color A color from the color module
     */
    Linegraph.getMax = function (color) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_min
     * @param color A color from the color module
     */
    Linegraph.getMin = function (color) {
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-hide
     */
    Linegraph.hide = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-plot
     * @param color A color from the color module
     * @param x The X value
     * @param y The Y value
     */
    Linegraph.plot = function (color, x, y) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-show
     * @param fullscreen Show in full screen
     */
    Linegraph.show = function (fullscreen) { };
    return Linegraph;
}(_1.App));
exports.Linegraph = Linegraph;
