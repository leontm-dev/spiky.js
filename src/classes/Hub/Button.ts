// Imports

import { Hub } from ".";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button
 * @extends Hub
 */
export class Button extends Hub {
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button-func-pressed
   * @param button A button from the button submodule in the hub module
   */
  static pressed(button: number): boolean {
    return false;
  }

  LEFT = 1;
  RIGHT = 2;
}
