import { App } from ".";
/**
 * The display module is used show images in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display
 */
export declare class Display extends App {
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-hide
     */
    static hide(): void;
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-image
     * @param image The id of the image to show. The range of available images is 1 to 21. There are consts on the display module for these
     */
    static image(image: number): void;
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-show
     * @param fullscreen Show in full screen
     */
    static show(fullscreen: boolean): void;
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-text
     * @param text The text to display
     */
    static text(text: string): void;
    static IMAGE_ROBOT_1: number;
    static IMAGE_ROBOT_2: number;
    static IMAGE_ROBOT_3: number;
    static IMAGE_ROBOT_4: number;
    static IMAGE_ROBOT_5: number;
    static IMAGE_HUB_1: number;
    static IMAGE_HUB_2: number;
    static IMAGE_HUB_3: number;
    static IMAGE_HUB_4: number;
    static IMAGE_AMUSEMENT_PARK: number;
    static IMAGE_BEACH: number;
    static IMAGE_HAUNTED_HOUSE: number;
    static IMAGE_CARNIVAL: number;
    static IMAGE_BOOKSHELF: number;
    static IMAGE_PLAYGROUND: number;
    static IMAGE_MOON: number;
    static IMAGE_CAVE: number;
    static IMAGE_OCEAN: number;
    static IMAGE_POLAR_BEAR: number;
    static IMAGE_PARK: number;
    static IMAGE_RANDOM: number;
}
