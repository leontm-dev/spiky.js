// Imports

import { writeLine } from "../../functions/writeLine";
import { Hub } from ".";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button
 * @extends Hub
 */
export class Button extends Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    super();
    if (!variableName) {
      this.variableName = "button";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = button`, "code");
    }
    writeLine("from hub import button", "imports");
  }
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button-func-pressed
   * @param button A button from the button submodule in the hub module
   */
  pressed(button: Button) {}
}
