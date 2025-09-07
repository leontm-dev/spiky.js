"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
/**
 * The device module enables you to write code to get information about devices plugged into the hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device
 */
var Device = /** @class */ (function () {
    function Device() {
    }
    /**
     * Retrieve the raw LPF-2 data from a device.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-data
     * @param port A port from the port submodule in the hub module
     */
    Device.data = function (port) {
        return [0];
    };
    /**
     * Retrieve the device id of a device. Each device has an id based on its type.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-id
     * @param port A port from the port submodule in the hub module
     */
    Device.deviceId = function (port) {
        return 0;
    };
    /**
     * Retrieve the duty cycle for a device.
     * @returns Returned values is in range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    Device.getDutyCycle = function (port) {
        return 0;
    };
    /**
     * A port from the port submodule in the hub module
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-ready
     * @param port A port from the port submodule in the hub module
     */
    Device.ready = function (port) {
        return false;
    };
    /**
     * Set the duty cycle on a device. Range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param dutyCycle The PWM value (0-10000)
     */
    Device.setDutyCycle = function (port, dutyCycle) { };
    return Device;
}());
exports.Device = Device;
