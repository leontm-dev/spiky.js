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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Port.A = 0;
    Port.B = 1;
    Port.C = 2;
    Port.D = 3;
    Port.E = 4;
    Port.F = 5;
    return Port;
}(_1.Hub));
exports.Port = Port;
