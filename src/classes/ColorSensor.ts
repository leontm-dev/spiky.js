// Code

/**
 * The color_sensor module enables you to write code that reacts to specific colors or the intensity of the reflected light.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor
 */
export class ColorSensor {
  /**
   * Returns the color value of the detected color. Use the color module to map the color value to a specific color.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-color
   * @param port A port from the port submodule in the hub module
   */
  static color(port: number): number {
    return 0;
  }
  /**
   * Retrieves the intensity of the reflected light (0-100%).
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-reflection
   * @param port A port from the port submodule in the hub module
   */
  static reflection(port: number): number {
    return 50;
  }
  /**
   * Retrieves the overall color intensity and intensity of red, green and blue.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_sensor-func-rgbi
   * @param port A port from the port submodule in the hub module
   * @returns Returns tuple[red: int, green: int, blue: int, intensity: int]
   */
  static rgbi(port: number): [number, number, number] {
    return [0, 0, 0];
  }
}
