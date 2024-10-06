"use strict";
// Imports
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spiky = void 0;
var fs = __importStar(require("fs"));
var Spiky = /** @class */ (function () {
    /**
     * This class is used to export all the code to a file.
     * @param fileName The name of the file in which all the code will be exported.
     * @param projectName The name of the project.
     */
    function Spiky(fileName, projectName) {
        this.imports = [];
        this.code = [];
        this.comments = [];
        this.fileName = fileName;
        this.projectName = projectName;
    }
    Spiky.prototype.addComment = function (comment) {
        this.comments.push("#".concat(comment));
    };
    Spiky.prototype.render = function () {
        var imports = this.imports.join("\n");
        var comments = this.comments.join("\n");
        var code = this.code.join("\n");
        var fileContent = "#".concat(this.projectName, "\n\n").concat(comments, "\n\n").concat(imports, "\n\n").concat(code);
        fs.writeFileSync("".concat(this.fileName, ".py"), fileContent);
    };
    return Spiky;
}());
exports.Spiky = Spiky;
