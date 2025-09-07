"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hub = void 0;
var Hub = /** @class */ (function () {
    function Hub() {
    }
    /**
     * Retrieve the device id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
     */
    Hub.deviceUuid = function () {
        return "";
    };
    /**
     * Retrieve the hardware id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
     */
    Hub.hardwareId = function () {
        return "";
    };
    /**
     * Turns off the hub.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
     */
    Hub.powerOff = function () {
        return 0;
    };
    /**
     * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
     */
    Hub.temperature = function () {
        return 0;
    };
    return Hub;
}());
exports.Hub = Hub;
