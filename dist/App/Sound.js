"use strict";
// Imports
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sound = void 0;
var _1 = require(".");
// Code
/**
 * The sound module is used play sounds in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound
 */
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Play a sound in the SPIKE App
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-play
     * @param soundName The sound name as seen in the Word Blocks sound extension
     * @param volume The volume (0-100)
     * @param pitch The pitch of the sound
     * @param pan The pan effect determines which speaker is emitting the sound, with "-100" being only the left speaker, "0" being normal, and "100" being only the right speaker.
     */
    Sound.play = function (soundName, volume, pitch, pan) {
        if (volume === void 0) { volume = 100; }
        if (pitch === void 0) { pitch = 0; }
        if (pan === void 0) { pan = 0; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-set_attributes
     * @param volume The volume (0-100)
     * @param pitch The pitch of the sound
     * @param pan The pan effect determines which speaker is emitting the sound, with "-100" being only the left speaker, "0" being normal, and "100" being only the right speaker.
     */
    Sound.setAttributes = function (volume, pitch, pan) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-stop
     */
    Sound.stop = function () { };
    return Sound;
}(_1.App));
exports.Sound = Sound;
