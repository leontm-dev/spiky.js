// Imports

import { Hub } from ".";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix
 * @extends Hub
 */
export class LightMatrix extends Hub {
  /**
   * Switches off all of the pixels on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-clear
   */
  static clear(): void {}
  /**
   * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
   */
  static getOrientation(): number {
    return 0;
  }
  /**
   * Retrieve the intensity of a specific pixel on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
   * @param x The X value, range (0 - 4)
   * @param y The Y value, range (0 - 4)
   */
  static getPixel(x: number, y: number): number {
    return 0;
  }
  /**
   * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
   * @param top The side of the hub to be the top
   */
  static setOrientation(top: number): number {
    return 0;
  }
  /**
   * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
   * @param x The X value, range (0 - 4)
   * @param y The Y value, range (0 - 4)
   * @param intensity How bright to light up the pixel
   */
  static setPixel(x: number, y: number, intensity: number): void {}
  /**
   * Change all the lights at the same time.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
   * @param pixels A list containing light intensity values for all 25 pixels.
   */
  static show(pixels: number[]): void {}
  /**
   * Display one of the built in images on the display.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
   * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
   */
  static showImage(image: number): void {}
  /**
   * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
   * @param text The text to display
   * @param intensity How bright to light up the pixel
   * @param timePerCharacter How long to show each character on the display
   */
  static write(
    text: string,
    intensity?: number,
    timePerCharacter?: number
  ): Promise<unknown> {
    return new Promise<unknown>((resolve) => setTimeout(resolve, 1000));
  }

  static IMAGE_HEART = 1;
  static IMAGE_HEART_SMALL = 2;
  static IMAGE_HAPPY = 3;
  static IMAGE_SMILE = 4;
  static IMAGE_SAD = 5;
  static IMAGE_CONFUSED = 6;
  static IMAGE_ANGRY = 7;
  static IMAGE_ASLEEP = 8;
  static IMAGE_SURPRISED = 9;
  static IMAGE_SILLY = 10;
  static IMAGE_FABULOUS = 11;
  static IMAGE_MEH = 12;
  static IMAGE_YES = 13;
  static IMAGE_NO = 14;
  static IMAGE_CLOCK12 = 15;
  static IMAGE_CLOCK1 = 16;
  static IMAGE_CLOCK2 = 17;
  static IMAGE_CLOCK3 = 18;
  static IMAGE_CLOCK4 = 19;
  static IMAGE_CLOCK5 = 20;
  static IMAGE_CLOCK6 = 21;
  static IMAGE_CLOCK7 = 22;
  static IMAGE_CLOCK8 = 23;
  static IMAGE_CLOCK9 = 24;
  static IMAGE_CLOCK10 = 25;
  static IMAGE_CLOCK11 = 26;
  static IMAGE_ARROW_N = 27;
  static IMAGE_ARROW_NE = 28;
  static IMAGE_ARROW_E = 29;
  static IMAGE_ARROW_SE = 30;
  static IMAGE_ARROW_S = 31;
  static IMAGE_ARROW_SW = 32;
  static IMAGE_ARROW_W = 33;
  static IMAGE_ARROW_NW = 34;
  static IMAGE_GO_RIGHT = 35;
  static IMAGE_GO_LEFT = 36;
  static IMAGE_GO_UP = 37;
  static IMAGE_GO_DOWN = 38;
  static IMAGE_TRIANGLE = 39;
  static IMAGE_TRIANGLE_LEFT = 40;
  static IMAGE_CHESSBOARD = 41;
  static IMAGE_DIAMOND = 42;
  static IMAGE_DIAMOND_SMALL = 43;
  static IMAGE_SQUARE = 44;
  static IMAGE_SQUARE_SMALL = 45;
  static IMAGE_RABBIT = 46;
  static IMAGE_COW = 47;
  static IMAGE_MUSIC_CROTCHET = 48;
  static IMAGE_MUSIC_QUAVER = 49;
  static IMAGE_MUSIC_QUAVERS = 50;
  static IMAGE_PITCHFORK = 51;
  static IMAGE_XMAS = 52;
  static IMAGE_PACMAN = 53;
  static IMAGE_TARGET = 54;
  static IMAGE_TSHIRT = 55;
  static IMAGE_ROLLERSKATE = 56;
  static IMAGE_DUCK = 57;
  static IMAGE_HOUSE = 58;
  static IMAGE_TORTOISE = 59;
  static IMAGE_BUTTERFLY = 60;
  static IMAGE_STICKFIGURE = 61;
  static IMAGE_GHOST = 62;
  static IMAGE_SWORD = 63;
  static IMAGE_GIRAFFE = 64;
  static IMAGE_SKULL = 65;
  static IMAGE_UMBRELLA = 66;
  static IMAGE_SNAKE = 67;
}
