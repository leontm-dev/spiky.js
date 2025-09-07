// Imports

import { App } from ".";

// Code

/**
 * The bargraph module is used make bar graphs in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph
 */
export class Bargraph extends App {
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-change
   * @param color A color from the color module
   * @param value The value
   */
  static change(color: number, value: number): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-clear_all
   */
  static clearAll(): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-get_value
   * @param color A color from the color module
   */
  static getValue(color: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-hide
   */
  static hide(): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-set_value
   * @param color A color from the color module
   * @param float The value
   */
  static setValue(color: number, float: number): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-show
   * @param fullscreen Show in full screen
   */
  static show(fullscreen: boolean): void {}
}
