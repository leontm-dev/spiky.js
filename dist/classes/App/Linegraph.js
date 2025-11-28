// Imports
import { App } from "./index";
// Code
/**
 * The linegraph module is used make line graphs in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph
 */
export class Linegraph extends App {
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-clear
     * @param color A color from the color module
     */
    static clear(color) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-clear_all
     */
    static clearAll() { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_average
     * @param color A color from the color module
     */
    static getAverage(color) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_last
     * @param color A color from the color module
     */
    static getLast(color) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_max
     * @param color A color from the color module
     */
    static getMax(color) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-get_min
     * @param color A color from the color module
     */
    static getMin(color) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-hide
     */
    static hide() { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-plot
     * @param color A color from the color module
     * @param x The X value
     * @param y The Y value
     */
    static plot(color, x, y) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-linegraph-func-show
     * @param fullscreen Show in full screen
     */
    static show(fullscreen) { }
}
