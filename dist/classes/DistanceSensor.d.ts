import Port from "../types/Port";
/**
 * The distance_sensor module enables you to write code that reacts to specific distances or light up the Distance Sensor in different ways.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor
 */
export declare class DistanceSensor {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * Turns off all the lights in the Distance Sensor connected to port.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-clear
     * @param port A port from the port submodule in the hub module
     */
    clear(port: Port): void;
    /**
     * Retrieve the distance in millimeters captured by the Distance Sensor connected to port. If the Distance Sensor cannot read a valid distance it will return -1.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-distance
     * @param port A port from the port submodule in the hub module
     */
    distance(port: Port): void;
    /**
     * Retrieve the intensity of a specific light on the Distance Sensor connected to port.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-get_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 3)
     * @param y The Y value, range (0 - 3)
     */
    getPixel(port: Port, x: number, y: number): void;
    /**
     * Changes the intensity of a specific light on the Distance Sensor connected to port.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-set_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 3)
     * @param y The Y value, range (0 - 3)
     * @param intensity How bright to light up the pixel
     */
    setPixel(port: Port, x: number, y: number, intensity: number): void;
    /**
     * Change all the lights at the same time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-show
     * @param port A port from the port submodule in the hub module
     * @param pixels A list containing intensity values for all 4 pixels.
     */
    show(port: Port, pixels: number[]): void;
}
