// Imports

import { writeLine } from "../../functions/writeLine";
import { Hub } from ".";
import Color from "../../types/Color";
import * as LightConstant from "../../types/Light";

// Code

/**
 * The light module includes functions to change the color of the light on the SPIKE Prime hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light
 * @extends Hub
 */
export class Light extends Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    super();
    if (!variableName) {
      this.variableName = "light";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = light`, "code");
    }
    writeLine("from hub import light", "imports");
  }
  /**
   * Change the color of a light on the hub.
   * @param light The light on the hub
   * @param color A color from the color module
   */
  color(light: LightConstant.default, color: Color) {}
}
