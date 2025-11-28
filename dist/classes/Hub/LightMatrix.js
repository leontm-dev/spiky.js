// Imports
import { Hub } from "./index";
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
    static clear() { }
    /**
     * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
     */
    static getOrientation() {
        return 0;
    }
    /**
     * Retrieve the intensity of a specific pixel on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     */
    static getPixel(x, y) {
        return 0;
    }
    /**
     * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
     * @param top The side of the hub to be the top
     */
    static setOrientation(top) {
        return 0;
    }
    /**
     * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     * @param intensity How bright to light up the pixel
     */
    static setPixel(x, y, intensity) { }
    /**
     * Change all the lights at the same time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
     * @param pixels A list containing light intensity values for all 25 pixels.
     */
    static show(pixels) { }
    /**
     * Display one of the built in images on the display.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
     * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
     */
    static showImage(image) { }
    /**
     * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
     * @param text The text to display
     * @param intensity How bright to light up the pixel
     * @param timePerCharacter How long to show each character on the display
     */
    static write(text, intensity, timePerCharacter) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
}
LightMatrix.IMAGE_HEART = 1;
LightMatrix.IMAGE_HEART_SMALL = 2;
LightMatrix.IMAGE_HAPPY = 3;
LightMatrix.IMAGE_SMILE = 4;
LightMatrix.IMAGE_SAD = 5;
LightMatrix.IMAGE_CONFUSED = 6;
LightMatrix.IMAGE_ANGRY = 7;
LightMatrix.IMAGE_ASLEEP = 8;
LightMatrix.IMAGE_SURPRISED = 9;
LightMatrix.IMAGE_SILLY = 10;
LightMatrix.IMAGE_FABULOUS = 11;
LightMatrix.IMAGE_MEH = 12;
LightMatrix.IMAGE_YES = 13;
LightMatrix.IMAGE_NO = 14;
LightMatrix.IMAGE_CLOCK12 = 15;
LightMatrix.IMAGE_CLOCK1 = 16;
LightMatrix.IMAGE_CLOCK2 = 17;
LightMatrix.IMAGE_CLOCK3 = 18;
LightMatrix.IMAGE_CLOCK4 = 19;
LightMatrix.IMAGE_CLOCK5 = 20;
LightMatrix.IMAGE_CLOCK6 = 21;
LightMatrix.IMAGE_CLOCK7 = 22;
LightMatrix.IMAGE_CLOCK8 = 23;
LightMatrix.IMAGE_CLOCK9 = 24;
LightMatrix.IMAGE_CLOCK10 = 25;
LightMatrix.IMAGE_CLOCK11 = 26;
LightMatrix.IMAGE_ARROW_N = 27;
LightMatrix.IMAGE_ARROW_NE = 28;
LightMatrix.IMAGE_ARROW_E = 29;
LightMatrix.IMAGE_ARROW_SE = 30;
LightMatrix.IMAGE_ARROW_S = 31;
LightMatrix.IMAGE_ARROW_SW = 32;
LightMatrix.IMAGE_ARROW_W = 33;
LightMatrix.IMAGE_ARROW_NW = 34;
LightMatrix.IMAGE_GO_RIGHT = 35;
LightMatrix.IMAGE_GO_LEFT = 36;
LightMatrix.IMAGE_GO_UP = 37;
LightMatrix.IMAGE_GO_DOWN = 38;
LightMatrix.IMAGE_TRIANGLE = 39;
LightMatrix.IMAGE_TRIANGLE_LEFT = 40;
LightMatrix.IMAGE_CHESSBOARD = 41;
LightMatrix.IMAGE_DIAMOND = 42;
LightMatrix.IMAGE_DIAMOND_SMALL = 43;
LightMatrix.IMAGE_SQUARE = 44;
LightMatrix.IMAGE_SQUARE_SMALL = 45;
LightMatrix.IMAGE_RABBIT = 46;
LightMatrix.IMAGE_COW = 47;
LightMatrix.IMAGE_MUSIC_CROTCHET = 48;
LightMatrix.IMAGE_MUSIC_QUAVER = 49;
LightMatrix.IMAGE_MUSIC_QUAVERS = 50;
LightMatrix.IMAGE_PITCHFORK = 51;
LightMatrix.IMAGE_XMAS = 52;
LightMatrix.IMAGE_PACMAN = 53;
LightMatrix.IMAGE_TARGET = 54;
LightMatrix.IMAGE_TSHIRT = 55;
LightMatrix.IMAGE_ROLLERSKATE = 56;
LightMatrix.IMAGE_DUCK = 57;
LightMatrix.IMAGE_HOUSE = 58;
LightMatrix.IMAGE_TORTOISE = 59;
LightMatrix.IMAGE_BUTTERFLY = 60;
LightMatrix.IMAGE_STICKFIGURE = 61;
LightMatrix.IMAGE_GHOST = 62;
LightMatrix.IMAGE_SWORD = 63;
LightMatrix.IMAGE_GIRAFFE = 64;
LightMatrix.IMAGE_SKULL = 65;
LightMatrix.IMAGE_UMBRELLA = 66;
LightMatrix.IMAGE_SNAKE = 67;
