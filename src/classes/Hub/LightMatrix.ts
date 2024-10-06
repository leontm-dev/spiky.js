// Imports

import { Hub } from ".";
import { writeLine } from "../../functions/writeLine";
import * as LightMatrixConsts from "../../types/lightMatrix";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix
 * @extends Hub
 */
export class LightMatrix extends Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    super();
    if (!variableName) {
      this.variableName = "light_matrix";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = light_matrix`, "code");
    }
    writeLine("from hub import light_matrix", "imports");
  }
  /**
   * Switches off all of the pixels on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-clear
   */
  clear() {}
  /**
   * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
   */
  getOrientation() {}
  /**
   * Retrieve the intensity of a specific pixel on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
   * @param x The X value, range (0 - 4)
   * @param y The Y value, range (0 - 4)
   */
  getPixel(x: number, y: number) {
    if (x < 0 || x > 4) {
      throw new Error("X value must be in range 0 to 4");
    }
    if (y < 0 || y > 4) {
      throw new Error("Y value must be in range 0 to 4");
    }
  }
  /**
   * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
   * @param top The side of the hub to be the top
   */
  setOrientation(top: number) {}
  /**
   * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
   * @param x The X value, range (0 - 4)
   * @param y The Y value, range (0 - 4)
   * @param intensity How bright to light up the pixel
   */
  setPixel(x: number, y: number, intensity: number) {
    if (x < 0 || x > 4) {
      throw new Error("X value must be in range 0 to 4");
    }
    if (y < 0 || y > 4) {
      throw new Error("Y value must be in range 0 to 4");
    }
  }
  /**
   * Change all the lights at the same time.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
   * @param pixels A list containing light intensity values for all 25 pixels.
   */
  show(pixels: number[]) {
    if (pixels.length > 25) {
      throw new Error("Pixels list can not contain more than 25 values");
    }
  }
  /**
   * Display one of the built in images on the display.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
   * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
   */
  showImage(image: LightMatrixConsts.default) {}
  /**
   * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
   * @param text The text to display
   * @param intensity How bright to light up the pixel
   * @param timePerCharacter How long to show each character on the display
   */
  write(text: string, intensity?: number, timePerCharacter?: number) {
    if (intensity && (intensity < 0 || intensity > 100)) {
      throw new Error("Intensity must be in range 0 to 100");
    }
    if (intensity === undefined) {
      intensity = 100;
    }
    if (timePerCharacter && timePerCharacter < 0) {
      throw new Error("Time per character must be a positive number");
    }
    if (timePerCharacter === undefined) {
      timePerCharacter = 500;
    }
  }
}
