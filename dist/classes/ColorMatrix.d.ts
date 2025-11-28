/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix
 */
export declare class ColorMatrix {
    /**
     * Turn off all pixels on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-clear
     * @param port A port from the port submodule in the hub module
     */
    static clear(port: number): void;
    /**
     * Retrieve a specific pixel represented as a tuple containing the color and intensity
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-get_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     */
    static getPixel(port: number, x: number, y: number): [number, number];
    /**
     * Change a single pixel on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-set_pixel
     * @param port A port from the port submodule in the hub module
     * @param x The X value (0 - 2)
     * @param y The Y value, range (0 - 2)
     * @param pixel Tuple containing color and intensity, meaning how bright to light up the pixel
     */
    static setPixel(port: number, x: number, y: number, pixel: {
        color: number;
        intensity: number;
    }): void;
    /**
     * Change all pixels at once on a Color Matrix
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color_matrix-func-show
     * @param port A port from the port submodule in the hub module
     * @param pixels A list containing color and intensity value tuples for all 9 pixels.
     */
    static show(port: number, pixels: [number, number]): void;
}
