/**
 * The force_sensor module contains all functions and constants to use the Force Sensor.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor
 */
export declare class ForceSensor {
    /**
     * Retrieves the measured force as decinewton. Values range from 0 to 100
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-force
     * @param port A port from the port submodule in the hub module
     */
    static force(port: number): number;
    /**
     * Tests whether the button on the sensor is pressed. Returns true if the force sensor connected to port is pressed.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-pressed
     * @param port A port from the port submodule in the hub module
     */
    static pressed(port: number): boolean;
    /**
     * Returns the raw, uncalibrated force value of the force sensor connected on port port
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-raw
     * @param port A port from the port submodule in the hub module
     */
    static raw(port: number): number;
}
