"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hub = void 0;
var writeLine_1 = require("../../functions/writeLine");
// Code
var Hub = /** @class */ (function () {
    function Hub(variableName) {
        if (!variableName) {
            this.variableName = "hub";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = hub"), "code");
        }
        (0, writeLine_1.writeLine)("import hub", "imports");
    }
    /**
     * Retrieve the device id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
     */
    Hub.prototype.deviceUuid = function () { };
    /**
     * Retrieve the hardware id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
     */
    Hub.prototype.hardwareId = function () { };
    /**
     * Turns off the hub.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
     */
    Hub.prototype.powerOff = function () { };
    /**
     * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
     */
    Hub.prototype.temperature = function () { };
    return Hub;
}());
exports.Hub = Hub;
