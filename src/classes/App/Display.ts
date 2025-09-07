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

  IMAGE_ROBOT_1 = 1;
  IMAGE_ROBOT_2 = 2;
  IMAGE_ROBOT_3 = 3;
  IMAGE_ROBOT_4 = 4;
  IMAGE_ROBOT_5 = 5;
  IMAGE_HUB_1 = 6;
  IMAGE_HUB_2 = 7;
  IMAGE_HUB_3 = 8;
  IMAGE_HUB_4 = 9;
  IMAGE_AMUSEMENT_PARK = 10;
  IMAGE_BEACH = 11;
  IMAGE_HAUNTED_HOUSE = 12;
  IMAGE_CARNIVAL = 13;
  IMAGE_BOOKSHELF = 14;
  IMAGE_PLAYGROUND = 15;
  IMAGE_MOON = 16;
  IMAGE_CAVE = 17;
  IMAGE_OCEAN = 18;
  IMAGE_POLAR_BEAR = 19;
  IMAGE_PARK = 20;
  IMAGE_RANDOM = 21;
}
