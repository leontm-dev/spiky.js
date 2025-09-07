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
    IMAGE_ROBOT_1: number;
    IMAGE_ROBOT_2: number;
    IMAGE_ROBOT_3: number;
    IMAGE_ROBOT_4: number;
    IMAGE_ROBOT_5: number;
    IMAGE_HUB_1: number;
    IMAGE_HUB_2: number;
    IMAGE_HUB_3: number;
    IMAGE_HUB_4: number;
    IMAGE_AMUSEMENT_PARK: number;
    IMAGE_BEACH: number;
    IMAGE_HAUNTED_HOUSE: number;
    IMAGE_CARNIVAL: number;
    IMAGE_BOOKSHELF: number;
    IMAGE_PLAYGROUND: number;
    IMAGE_MOON: number;
    IMAGE_CAVE: number;
    IMAGE_OCEAN: number;
    IMAGE_POLAR_BEAR: number;
    IMAGE_PARK: number;
    IMAGE_RANDOM: number;
}
