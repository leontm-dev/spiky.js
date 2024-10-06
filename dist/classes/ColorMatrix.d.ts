import Color from "../types/Color";
import Port from "../types/Port";
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix
 */
export declare class ColorMatrix {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * Turn off all pixels on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-clear
     * @param port A port from the port submodule in the hub module
     */
    clear(port: Port): void;
    /**
     * Retrieve a specific pixel represented as a tuple containing the color and intensity
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-get_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     */
    getPixel(port: Port, x: number, y: number): void;
    /**
     * Change a single pixel on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-set_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     * @param pixel Tuple containing color and intensity, meaning how bright to light up the pixel
     */
    setPixel(port: Port, x: number, y: number, pixel: {
        color: Color;
        intensity: number;
    }): void;
    /**
     * Change all pixels at once on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-show
     * @param port A port from the port submodule in the hub module
     * @param pixels A list containing color and intensity value tuples for all 9 pixels.
     */
    show(port: Port, pixels: {
        color: Color;
        intensity: number;
    }[]): void;
}
