// Imports

import { writeLine } from "../functions/writeLine";
import Color from "../types/Color";
import Port from "../types/Port";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix
 */
export class ColorMatrix {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "color_matrix";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = color_matrix`, "code");
    }
    writeLine("import color_matrix", "imports");
  }
  /**
   * Turn off all pixels on a Color Matrix
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-clear
   * @param port A port from the port submodule in the hub module
   */
  clear(port: Port) {
    writeLine(`${this.variableName}.clear(port=${port})`, "code");
  }
  /**
   * Retrieve a specific pixel represented as a tuple containing the color and intensity
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-get_pixel
   * @param port A port from the port submodule in the hub module
   * @param x The X value (0 - 2)
   * @param y The Y value, range (0 - 2)
   */
  getPixel(port: Port, x: number, y: number) {
    if (x < 0 || x > 2) {
      throw new Error("X value must be in the range 0 - 2");
    }
    if (y < 0 || y > 2) {
      throw new Error("Y value must be in the range 0 - 2");
    }

    writeLine(
      `${this.variableName}.get_pixel(port=${port}, x=${x}, y=${y})`,
      "code"
    );
  }
  /**
   * Change a single pixel on a Color Matrix
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-set_pixel
   * @param port A port from the port submodule in the hub module
   * @param x The X value (0 - 2)
   * @param y The Y value, range (0 - 2)
   * @param pixel Tuple containing color and intensity, meaning how bright to light up the pixel
   */
  setPixel(
    port: Port,
    x: number,
    y: number,
    pixel: { color: Color; intensity: number }
  ) {
    if (x < 0 || x > 2) {
      throw new Error("X value must be in the range 0 - 2");
    }
    if (y < 0 || y > 2) {
      throw new Error("Y value must be in the range 0 - 2");
    }

    writeLine(
      `${this.variableName}.set_pixel(port=${port}, x=${x}, y=${y}, pixel=${pixel})`,
      "code"
    );
  }
  /**
   * Change all pixels at once on a Color Matrix
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-show
   * @param port A port from the port submodule in the hub module
   * @param pixels A list containing color and intensity value tuples for all 9 pixels.
   */
  show(port: Port, pixels: { color: Color; intensity: number }[]) {
    if (pixels.length > 9) {
      throw new Error("You can only set 9 pixels at a time");
    }

    writeLine(
      `${this.variableName}.show(port=${port}, pixels=${pixels})`,
      "code"
    );
  }
}
