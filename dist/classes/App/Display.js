// Imports
import { App } from "./index";
// Code
/**
 * The display module is used show images in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display
 */
export class Display extends App {
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-hide
     */
    static hide() { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-image
     * @param image The id of the image to show. The range of available images is 1 to 21. There are consts on the display module for these
     */
    static image(image) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-show
     * @param fullscreen Show in full screen
     */
    static show(fullscreen) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-display-func-text
     * @param text The text to display
     */
    static text(text) { }
}
Display.IMAGE_ROBOT_1 = 1;
Display.IMAGE_ROBOT_2 = 2;
Display.IMAGE_ROBOT_3 = 3;
Display.IMAGE_ROBOT_4 = 4;
Display.IMAGE_ROBOT_5 = 5;
Display.IMAGE_HUB_1 = 6;
Display.IMAGE_HUB_2 = 7;
Display.IMAGE_HUB_3 = 8;
Display.IMAGE_HUB_4 = 9;
Display.IMAGE_AMUSEMENT_PARK = 10;
Display.IMAGE_BEACH = 11;
Display.IMAGE_HAUNTED_HOUSE = 12;
Display.IMAGE_CARNIVAL = 13;
Display.IMAGE_BOOKSHELF = 14;
Display.IMAGE_PLAYGROUND = 15;
Display.IMAGE_MOON = 16;
Display.IMAGE_CAVE = 17;
Display.IMAGE_OCEAN = 18;
Display.IMAGE_POLAR_BEAR = 19;
Display.IMAGE_PARK = 20;
Display.IMAGE_RANDOM = 21;
