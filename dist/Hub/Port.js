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
exports.Port = void 0;
var _1 = require(".");
// Code
var Port = /** @class */ (function (_super) {
    __extends(Port, _super);
    function Port() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.A = 0;
        _this.B = 1;
        _this.C = 2;
        _this.D = 3;
        _this.E = 4;
        _this.F = 5;
        return _this;
    }
    return Port;
}(_1.Hub));
exports.Port = Port;
