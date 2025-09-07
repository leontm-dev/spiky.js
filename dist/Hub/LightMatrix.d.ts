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
    IMAGE_HEART: number;
    IMAGE_HEART_SMALL: number;
    IMAGE_HAPPY: number;
    IMAGE_SMILE: number;
    IMAGE_SAD: number;
    IMAGE_CONFUSED: number;
    IMAGE_ANGRY: number;
    IMAGE_ASLEEP: number;
    IMAGE_SURPRISED: number;
    IMAGE_SILLY: number;
    IMAGE_FABULOUS: number;
    IMAGE_MEH: number;
    IMAGE_YES: number;
    IMAGE_NO: number;
    IMAGE_CLOCK12: number;
    IMAGE_CLOCK1: number;
    IMAGE_CLOCK2: number;
    IMAGE_CLOCK3: number;
    IMAGE_CLOCK4: number;
    IMAGE_CLOCK5: number;
    IMAGE_CLOCK6: number;
    IMAGE_CLOCK7: number;
    IMAGE_CLOCK8: number;
    IMAGE_CLOCK9: number;
    IMAGE_CLOCK10: number;
    IMAGE_CLOCK11: number;
    IMAGE_ARROW_N: number;
    IMAGE_ARROW_NE: number;
    IMAGE_ARROW_E: number;
    IMAGE_ARROW_SE: number;
    IMAGE_ARROW_S: number;
    IMAGE_ARROW_SW: number;
    IMAGE_ARROW_W: number;
    IMAGE_ARROW_NW: number;
    IMAGE_GO_RIGHT: number;
    IMAGE_GO_LEFT: number;
    IMAGE_GO_UP: number;
    IMAGE_GO_DOWN: number;
    IMAGE_TRIANGLE: number;
    IMAGE_TRIANGLE_LEFT: number;
    IMAGE_CHESSBOARD: number;
    IMAGE_DIAMOND: number;
    IMAGE_DIAMOND_SMALL: number;
    IMAGE_SQUARE: number;
    IMAGE_SQUARE_SMALL: number;
    IMAGE_RABBIT: number;
    IMAGE_COW: number;
    IMAGE_MUSIC_CROTCHET: number;
    IMAGE_MUSIC_QUAVER: number;
    IMAGE_MUSIC_QUAVERS: number;
    IMAGE_PITCHFORK: number;
    IMAGE_XMAS: number;
    IMAGE_PACMAN: number;
    IMAGE_TARGET: number;
    IMAGE_TSHIRT: number;
    IMAGE_ROLLERSKATE: number;
    IMAGE_DUCK: number;
    IMAGE_HOUSE: number;
    IMAGE_TORTOISE: number;
    IMAGE_BUTTERFLY: number;
    IMAGE_STICKFIGURE: number;
    IMAGE_GHOST: number;
    IMAGE_SWORD: number;
    IMAGE_GIRAFFE: number;
    IMAGE_SKULL: number;
    IMAGE_UMBRELLA: number;
    IMAGE_SNAKE: number;
}
