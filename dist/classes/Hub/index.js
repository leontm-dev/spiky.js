// Code
export class Hub {
    /**
     * Retrieve the device id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
     */
    static deviceUuid() {
        return "";
    }
    /**
     * Retrieve the hardware id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
     */
    static hardwareId() {
        return "";
    }
    /**
     * Turns off the hub.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
     */
    static powerOff() {
        return 0;
    }
    /**
     * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
     */
    static temperature() {
        return 0;
    }
}
