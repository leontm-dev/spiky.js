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
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound
 * @extends Hub
 */
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a beep sound from the hub
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-beep
     * @param freq The frequency to play
     * @param duration The duration in milliseconds
     * @param volume The volume (0-100)
     * @param attack The time taken for initial run-up of level from nil to peak, beginning when the key is pressed.
     * @param decay The time taken for the subsequent run down from the attack level to the designated sustain level.
     * @param sustain The level during the main sequence of the sound's duration, until the key is released.
     * @param release The time taken for the level to decay from the sustain level to zero after the key is released
     * @param transition time in milliseconds to transition into the sound if something is already playing in the channel
     * @param waveform The synthesized waveform. Use one of the constants in the hub.sound module.
     * @param channel The desired channel to play on, options are sound.DEFAULT and sound.ANY
     */
    Sound.beep = function (freq, duration, volume, attack, decay, sustain, release, transition, waveform, channel) {
        if (attack === void 0) { attack = 0; }
        if (decay === void 0) { decay = 0; }
        if (sustain === void 0) { sustain = 100; }
        if (release === void 0) { release = 0; }
        if (transition === void 0) { transition = 10; }
        if (waveform === void 0) { waveform = 1; }
        if (channel === void 0) { channel = -1; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Stops all noise from the hub
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-stop
     */
    Sound.stop = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-volume
     * @param volume The volume to set (0-100)
     */
    Sound.volume = function (volume) { };
    Sound.ANY = -2;
    Sound.DEFAULT = -1;
    Sound.WAVEFORM_SINE = 1;
    Sound.WAVEFORM_SAWTOOTH = 3;
    Sound.WAVEFORM_SQUARE = 2;
    Sound.WAVEFORM_TRIANGLE = 1;
    return Sound;
}(_1.Hub));
exports.Sound = Sound;
