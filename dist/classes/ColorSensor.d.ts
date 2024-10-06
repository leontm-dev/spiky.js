import Port from "../types/Port";
/**
 * The color_sensor module enables you to write code that reacts to specific colors or the intensity of the reflected light.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor
 */
export declare class ColorSensor {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * Returns the color value of the detected color. Use the color module to map the color value to a specific color.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-color
     * @param port A port from the port submodule in the hub module
     */
    color(port: Port): void;
    /**
     * Retrieves the intensity of the reflected light (0-100%).
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-reflection
     * @param port A port from the port submodule in the hub module
     */
    reflection(port: Port): void;
    /**
     * Retrieves the overall color intensity and intensity of red, green and blue.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-rgbi
     * @param port A port from the port submodule in the hub module
     * @returns Returns tuple[red: int, green: int, blue: int, intensity: int]
     */
    rgbi(port: Port): void;
}
