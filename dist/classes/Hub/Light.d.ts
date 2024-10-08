import { Hub } from ".";
import Color from "../../types/Color";
import * as LightConstant from "../../types/Light";
/**
 * The light module includes functions to change the color of the light on the SPIKE Prime hub.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-light
 * @extends Hub
 */
export declare class Light extends Hub {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * Change the color of a light on the hub.
     * @param light The light on the hub
     * @param color A color from the color module
     */
    color(light: LightConstant.default, color: Color): void;
}
