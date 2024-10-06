export declare class Hub {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * Retrieve the device id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
     */
    deviceUuid(): void;
    /**
     * Retrieve the hardware id.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
     */
    hardwareId(): void;
    /**
     * Turns off the hub.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
     */
    powerOff(): void;
    /**
     * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
     */
    temperature(): void;
}
