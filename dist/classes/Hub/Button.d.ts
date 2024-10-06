import { Hub } from ".";
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button
 * @extends Hub
 */
export declare class Button extends Hub {
    readonly variableName: string;
    constructor(variableName?: string);
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-button-func-pressed
     * @param button A button from the button submodule in the hub module
     */
    pressed(button: Button): void;
}
