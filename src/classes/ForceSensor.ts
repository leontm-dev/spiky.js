// Imports

import { writeLine } from "../functions/writeLine";
import Port from "../types/Port";

// Code

/**
 * The force_sensor module contains all functions and constants to use the Force Sensor.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor
 */
export class ForceSensor {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "force_sensor";
    } else {
      this.variableName = variableName;
      writeLine(`${this.variableName} = force_sensor`, "code");
    }
    writeLine("import force_sensor", "imports");
  }
  /**
   * Retrieves the measured force as decinewton. Values range from 0 to 100
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-force
   * @param port A port from the port submodule in the hub module
   */
  force(port: Port) {}
  /**
   * Tests whether the button on the sensor is pressed. Returns true if the force sensor connected to port is pressed.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-pressed
   * @param port A port from the port submodule in the hub module
   */
  pressed(port: Port) {}
  /**
   * Returns the raw, uncalibrated force value of the force sensor connected on port port
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-force_sensor-func-raw
   * @param port A port from the port submodule in the hub module
   */
  raw(port: Port) {}
}
