// Imports

import { writeLine } from "../../functions/writeLine";

// Code

export class Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "hub";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = hub`, "code");
    }
    writeLine("import hub", "imports");
  }
  /**
   * Retrieve the device id.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-device_uuid
   */
  deviceUuid() {}
  /**
   * Retrieve the hardware id.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-hardware_id
   */
  hardwareId() {}
  /**
   * Turns off the hub.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-power_off
   */
  powerOff() {}
  /**
   * Retrieve the hub temperature. Measured in decidegrees celsius (d°C) which is 1 / 10 of a degree celsius (°C)
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-func-temperature
   */
  temperature() {}
}
