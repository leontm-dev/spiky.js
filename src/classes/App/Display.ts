// Imports

import { App } from ".";

// Code

/**
 * The display module is used show images in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display
 */
export class Display extends App {
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-hide
   */
  static hide(): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-image
   * @param image The id of the image to show. The range of available images is 1 to 21. There are consts on the display module for these
   */
  static image(image: number): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-show
   * @param fullscreen Show in full screen
   */
  static show(fullscreen: boolean): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-text
   * @param text The text to display
   */
  static text(text: string): void {}

  static IMAGE_ROBOT_1 = 1;
  static IMAGE_ROBOT_2 = 2;
  static IMAGE_ROBOT_3 = 3;
  static IMAGE_ROBOT_4 = 4;
  static IMAGE_ROBOT_5 = 5;
  static IMAGE_HUB_1 = 6;
  static IMAGE_HUB_2 = 7;
  static IMAGE_HUB_3 = 8;
  static IMAGE_HUB_4 = 9;
  static IMAGE_AMUSEMENT_PARK = 10;
  static IMAGE_BEACH = 11;
  static IMAGE_HAUNTED_HOUSE = 12;
  static IMAGE_CARNIVAL = 13;
  static IMAGE_BOOKSHELF = 14;
  static IMAGE_PLAYGROUND = 15;
  static IMAGE_MOON = 16;
  static IMAGE_CAVE = 17;
  static IMAGE_OCEAN = 18;
  static IMAGE_POLAR_BEAR = 19;
  static IMAGE_PARK = 20;
  static IMAGE_RANDOM = 21;
}
