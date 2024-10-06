"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeLine = writeLine;
var __1 = require("..");
function writeLine(line, type) {
    switch (type) {
        case "comments":
            __1.Spiky.prototype.comments.push(line);
            break;
        case "code":
            __1.Spiky.prototype.code.push(line);
            break;
        case "imports":
            __1.Spiky.prototype.imports.push(line);
            break;
    }
}
