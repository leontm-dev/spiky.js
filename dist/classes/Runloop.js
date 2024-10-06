"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runloop = void 0;
var writeLine_1 = require("../functions/writeLine");
// Code
/**
 * The runloop module contains all functions and constants to use the Runloop.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop
 */
var Runloop = /** @class */ (function () {
    function Runloop(variableName) {
        if (!variableName) {
            this.variableName = "runloop";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(this.variableName, " = runloop"), "code");
        }
        (0, writeLine_1.writeLine)("import runloop", "imports");
    }
    /**
     * Start any number of parallel async functions. This is the function you should use to create programs with a similar structure to Word Blocks.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop-func-run
     * @param functions The functions to run
     */
    Runloop.prototype.run = function (functions) { };
    /**
     * Pause the execution of the application for any amount of milliseconds.
     * @param duration The duration in milliseconds
     */
    Runloop.prototype.sleepMs = function (duration) { };
    return Runloop;
}());
exports.Runloop = Runloop;
