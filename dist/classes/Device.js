"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
var writeLine_1 = require("../functions/writeLine");
// Code
/**
 * The device module enables you to write code to get information about devices plugged into the hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device
 */
var Device = /** @class */ (function () {
    /**
     *
     * @param variableName The name of the variable that will be used to refer to the device in the code
     */
    function Device(variableName) {
        if (!variableName) {
            this.variableName = "device";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(this.variableName, " = device"), "code");
        }
        (0, writeLine_1.writeLine)("import device", "imports");
    }
    /**
     * Retrieve the raw LPF-2 data from a device.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-data
     * @param port A port from the port submodule in the hub module
     */
    Device.prototype.data = function (port) { };
    /**
     * Retrieve the device id of a device. Each device has an id based on its type.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-id
     * @param port A port from the port submodule in the hub module
     */
    Device.prototype.id = function (port) { };
    /**
     * Retrieve the duty cycle for a device.
     * @returns Returned values is in range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    Device.prototype.getDutyCycle = function (port) { };
    /**
     * A port from the port submodule in the hub module
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-ready
     * @param port A port from the port submodule in the hub module
     */
    Device.prototype.ready = function (port) { };
    /**
     * Set the duty cycle on a device. Range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param dutyCycle The PWM value (0-10000)
     */
    Device.prototype.setDutyCycle = function (port, dutyCycle) {
        if (dutyCycle < 0 || dutyCycle > 10000) {
            throw new Error("Duty cycle must be in range 0 to 10000");
        }
    };
    return Device;
}());
exports.Device = Device;
