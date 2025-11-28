// Imports
import { App } from "./index";
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
    static change(color, value) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-clear_all
     */
    static clearAll() { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-get_value
     * @param color A color from the color module
     */
    static getValue(color) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-hide
     */
    static hide() { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-set_value
     * @param color A color from the color module
     * @param float The value
     */
    static setValue(color, float) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-bargraph-func-show
     * @param fullscreen Show in full screen
     */
    static show(fullscreen) { }
}
