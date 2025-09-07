/**
 * The device module enables you to write code to get information about devices plugged into the hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device
 */
export declare class Device {
    /**
     * Retrieve the raw LPF-2 data from a device.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-data
     * @param port A port from the port submodule in the hub module
     */
    static data(port: number): [number];
    /**
     * Retrieve the device id of a device. Each device has an id based on its type.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-id
     * @param port A port from the port submodule in the hub module
     */
    static deviceId(port: number): number;
    /**
     * Retrieve the duty cycle for a device.
     * @returns Returned values is in range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    static getDutyCycle(port: number): number;
    /**
     * A port from the port submodule in the hub module
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-ready
     * @param port A port from the port submodule in the hub module
     */
    static ready(port: number): boolean;
    /**
     * Set the duty cycle on a device. Range 0 to 10000
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param dutyCycle The PWM value (0-10000)
     */
    static setDutyCycle(port: number, dutyCycle: number): void;
}
