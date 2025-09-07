// Imports

import { Hub } from ".";

// Code

/**
 * The light module includes functions to change the color of the light on the SPIKE Prime hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light
 * @extends Hub
 */
export class Light extends Hub {
  /**
   * Change the color of a light on the hub.
   * @param light The light on the hub
   * @param color A color from the color module
   */
  static color(light: number, color: number): void {}

  static POWER = 0;
  static CONNECT = 1;
}
