import { Hub } from ".";
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix
 * @extends Hub
 */
export declare class LightMatrix extends Hub {
    /**
     * Switches off all of the pixels on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-clear
     */
    static clear(): void;
    /**
     * Retrieve the current orientation of the Light Matrix. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_orientation
     */
    static getOrientation(): number;
    /**
     * Retrieve the intensity of a specific pixel on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-get_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     */
    static getPixel(x: number, y: number): number;
    /**
     * Change the orientation of the Light Matrix. All subsequent calls will use the new orientation. Can be used with the following constants: orientation.UP, orientation.LEFT, orientation.RIGHT, orientation.DOWN
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_orientation
     * @param top The side of the hub to be the top
     */
    static setOrientation(top: number): number;
    /**
     * Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-set_pixel
     * @param x The X value, range (0 - 4)
     * @param y The Y value, range (0 - 4)
     * @param intensity How bright to light up the pixel
     */
    static setPixel(x: number, y: number, intensity: number): void;
    /**
     * Change all the lights at the same time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show
     * @param pixels A list containing light intensity values for all 25 pixels.
     */
    static show(pixels: number[]): void;
    /**
     * Display one of the built in images on the display.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-show_image
     * @param image The id of the image to show. The range of available images is 1 to 67. There are consts on the light_matrix module for these.
     */
    static showImage(image: number): void;
    /**
     * Displays text on the Light Matrix, one letter at a time, scrolling from right to left except if there is a single character to show which will not scroll
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light_matrix-func-write
     * @param text The text to display
     * @param intensity How bright to light up the pixel
     * @param timePerCharacter How long to show each character on the display
     */
    static write(text: string, intensity?: number, timePerCharacter?: number): Promise<unknown>;
    static IMAGE_HEART: number;
    static IMAGE_HEART_SMALL: number;
    static IMAGE_HAPPY: number;
    static IMAGE_SMILE: number;
    static IMAGE_SAD: number;
    static IMAGE_CONFUSED: number;
    static IMAGE_ANGRY: number;
    static IMAGE_ASLEEP: number;
    static IMAGE_SURPRISED: number;
    static IMAGE_SILLY: number;
    static IMAGE_FABULOUS: number;
    static IMAGE_MEH: number;
    static IMAGE_YES: number;
    static IMAGE_NO: number;
    static IMAGE_CLOCK12: number;
    static IMAGE_CLOCK1: number;
    static IMAGE_CLOCK2: number;
    static IMAGE_CLOCK3: number;
    static IMAGE_CLOCK4: number;
    static IMAGE_CLOCK5: number;
    static IMAGE_CLOCK6: number;
    static IMAGE_CLOCK7: number;
    static IMAGE_CLOCK8: number;
    static IMAGE_CLOCK9: number;
    static IMAGE_CLOCK10: number;
    static IMAGE_CLOCK11: number;
    static IMAGE_ARROW_N: number;
    static IMAGE_ARROW_NE: number;
    static IMAGE_ARROW_E: number;
    static IMAGE_ARROW_SE: number;
    static IMAGE_ARROW_S: number;
    static IMAGE_ARROW_SW: number;
    static IMAGE_ARROW_W: number;
    static IMAGE_ARROW_NW: number;
    static IMAGE_GO_RIGHT: number;
    static IMAGE_GO_LEFT: number;
    static IMAGE_GO_UP: number;
    static IMAGE_GO_DOWN: number;
    static IMAGE_TRIANGLE: number;
    static IMAGE_TRIANGLE_LEFT: number;
    static IMAGE_CHESSBOARD: number;
    static IMAGE_DIAMOND: number;
    static IMAGE_DIAMOND_SMALL: number;
    static IMAGE_SQUARE: number;
    static IMAGE_SQUARE_SMALL: number;
    static IMAGE_RABBIT: number;
    static IMAGE_COW: number;
    static IMAGE_MUSIC_CROTCHET: number;
    static IMAGE_MUSIC_QUAVER: number;
    static IMAGE_MUSIC_QUAVERS: number;
    static IMAGE_PITCHFORK: number;
    static IMAGE_XMAS: number;
    static IMAGE_PACMAN: number;
    static IMAGE_TARGET: number;
    static IMAGE_TSHIRT: number;
    static IMAGE_ROLLERSKATE: number;
    static IMAGE_DUCK: number;
    static IMAGE_HOUSE: number;
    static IMAGE_TORTOISE: number;
    static IMAGE_BUTTERFLY: number;
    static IMAGE_STICKFIGURE: number;
    static IMAGE_GHOST: number;
    static IMAGE_SWORD: number;
    static IMAGE_GIRAFFE: number;
    static IMAGE_SKULL: number;
    static IMAGE_UMBRELLA: number;
    static IMAGE_SNAKE: number;
}
