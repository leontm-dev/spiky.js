export declare class Hub {
    /**
     * Retrieve the device id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
     */
    static deviceUuid(): string;
    /**
     * Retrieve the hardware id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
     */
    static hardwareId(): string;
    /**
     * Turns off the hub.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
     */
    static powerOff(): number;
    /**
     * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
     */
    static temperature(): number;
}
