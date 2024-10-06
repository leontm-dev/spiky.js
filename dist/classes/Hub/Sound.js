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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sound = void 0;
var writeLine_1 = require("../../functions/writeLine");
var _1 = require(".");
var SoundConsts = __importStar(require("../../types/Sound"));
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound
 * @extends Hub
 */
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound(variableName) {
        var _this = _super.call(this) || this;
        if (!variableName) {
            _this.variableName = "sound";
        }
        else {
            _this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = sound"), "code");
        }
        (0, writeLine_1.writeLine)("from hub import sound", "imports");
        return _this;
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
    Sound.prototype.beep = function (freq, duration, volume, attack, decay, sustain, release, transition, waveform, channel) {
        if (volume < 0 || volume > 100) {
            throw new Error("Volume must be between 0 and 100");
        }
        if (attack == undefined) {
            attack = 0;
        }
        if (decay == undefined) {
            decay = 0;
        }
        if (sustain == undefined) {
            sustain = 100;
        }
        if (release == undefined) {
            release = 0;
        }
        if (transition == undefined) {
            transition = 10;
        }
        if (waveform == undefined) {
            waveform = SoundConsts.default.WAVEFORM_SINE;
        }
        if (channel == undefined) {
            channel = SoundConsts.default.DEFAULT;
        }
    };
    /**
     * Stops all noise from the hub
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-stop
     */
    Sound.prototype.stop = function () { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-volume
     * @param volume The volume to set (0-100)
     */
    Sound.prototype.volume = function (volume) {
        if (volume < 0 || volume > 100) {
            throw new Error("Volume must be between 0 and 100");
        }
    };
    return Sound;
}(_1.Hub));
exports.Sound = Sound;
