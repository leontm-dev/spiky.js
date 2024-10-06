// Imports

import { writeLine } from "../functions/writeLine";
import Port from "../types/Port";

// Code

/**
 * The device module enables you to write code to get information about devices plugged into the hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device
 */
export class Device {
  readonly variableName: string;
  /**
   *
   * @param variableName The name of the variable that will be used to refer to the device in the code
   */
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "device";
    } else {
      this.variableName = variableName;
      writeLine(`${this.variableName} = device`, "code");
    }
    writeLine("import device", "imports");
  }
  /**
   * Retrieve the raw LPF-2 data from a device.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-data
   * @param port A port from the port submodule in the hub module
   */
  data(port: Port) {}
  /**
   * Retrieve the device id of a device. Each device has an id based on its type.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-id
   * @param port A port from the port submodule in the hub module
   */
  id(port: Port) {}
  /**
   * Retrieve the duty cycle for a device.
   * @returns Returned values is in range 0 to 10000
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-get_duty_cycle
   * @param port A port from the port submodule in the hub module
   */
  getDutyCycle(port: Port) {}
  /**
   * A port from the port submodule in the hub module
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-ready
   * @param port A port from the port submodule in the hub module
   */
  ready(port: Port) {}
  /**
   * Set the duty cycle on a device. Range 0 to 10000
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-device-func-set_duty_cycle
   * @param port A port from the port submodule in the hub module
   * @param dutyCycle The PWM value (0-10000)
   */
  setDutyCycle(port: Port, dutyCycle: number) {
    if (dutyCycle < 0 || dutyCycle > 10000) {
      throw new Error("Duty cycle must be in range 0 to 10000");
    }
  }
}
