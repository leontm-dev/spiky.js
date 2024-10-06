// Imports

import { writeLine } from "../functions/writeLine";
import Port from "../types/Port";

// Code

/**
 * The distance_sensor module enables you to write code that reacts to specific distances or light up the Distance Sensor in different ways.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor
 */
export class DistanceSensor {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "distance_sensor";
    } else {
      this.variableName = variableName;
      writeLine(`${this.variableName} = distance_sensor`, "code");
    }
    writeLine("import distance_sensor", "imports");
  }
  /**
   * Turns off all the lights in the Distance Sensor connected to port.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-clear
   * @param port A port from the port submodule in the hub module
   */
  clear(port: Port) {}
  /**
   * Retrieve the distance in millimeters captured by the Distance Sensor connected to port. If the Distance Sensor cannot read a valid distance it will return -1.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-distance
   * @param port A port from the port submodule in the hub module
   */
  distance(port: Port) {}
  /**
   * Retrieve the intensity of a specific light on the Distance Sensor connected to port.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-get_pixel
   * @param port A port from the port submodule in the hub module
   * @param x The X value (0 - 3)
   * @param y The Y value, range (0 - 3)
   */
  getPixel(port: Port, x: number, y: number) {
    if (x < 0 || x > 3) {
      throw new Error("X value must be in range 0 to 3");
    }
    if (y < 0 || y > 3) {
      throw new Error("Y value must be in range 0 to 3");
    }
  }
  /**
   * Changes the intensity of a specific light on the Distance Sensor connected to port.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-set_pixel
   * @param port A port from the port submodule in the hub module
   * @param x The X value (0 - 3)
   * @param y The Y value, range (0 - 3)
   * @param intensity How bright to light up the pixel
   */
  setPixel(port: Port, x: number, y: number, intensity: number) {}
  /**
   * Change all the lights at the same time.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-distance_sensor-func-show
   * @param port A port from the port submodule in the hub module
   * @param pixels A list containing intensity values for all 4 pixels.
   */
  show(port: Port, pixels: number[]) {
    if (pixels.length > 4) {
      throw new Error("Pixels list can not contain more than 4 values");
    }
  }
}
