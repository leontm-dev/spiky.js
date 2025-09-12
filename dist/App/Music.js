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
exports.Music = void 0;
var _1 = require(".");
// Code
/**
 * The music module is used make music in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music
 */
var Music = /** @class */ (function (_super) {
    __extends(Music, _super);
    function Music() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_drum
     * @param drum The drum name. See all available values in the app.sound module.
     */
    Music.playDrum = function (drum) { };
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_instrument
     * @param instrument The instrument name. See all available values in the app.music module.
     * @param note The midi note to play (0-130)
     * @param duration The duration in milliseconds
     */
    Music.playInstrument = function (instrument, note, duration) { };
    Music.DRUM_BASS = 2;
    Music.DRUM_BONGO = 13;
    Music.DRUM_CABASA = 15;
    Music.DRUM_CLAVES = 9;
    Music.DRUM_CLOSED_HI_HAT = 6;
    Music.DRUM_CONGA = 14;
    Music.DRUM_COWBELL = 11;
    Music.DRUM_CRASH_CYMBAL = 4;
    Music.DRUM_CUICA = 18;
    Music.DRUM_GUIRO = 16;
    Music.DRUM_HAND_CLAP = 8;
    Music.DRUM_OPEN_HI_HAT = 5;
    Music.DRUM_SIDE_STICK = 3;
    Music.DRUM_SNARE = 1;
    Music.DRUM_TAMBOURINE = 7;
    Music.DRUM_TRIANGLE = 12;
    Music.DRUM_VIBRASLAP = 17;
    Music.DRUM_WOOD_BLOCK = 10;
    Music.INSTRUMENT_BASS = 6;
    Music.INSTRUMENT_BASSOON = 14;
    Music.INSTRUMENT_CELLO = 8;
    Music.INSTRUMENT_CHOIR = 15;
    Music.INSTRUMENT_CLARINET = 10;
    Music.INSTRUMENT_ELECTRIC_GUITAR = 5;
    Music.INSTRUMENT_ELECTRIC_PIANO = 2;
    Music.INSTRUMENT_FLUTE = 12;
    Music.INSTRUMENT_GUITAR = 4;
    Music.INSTRUMENT_MARIMBA = 19;
    Music.INSTRUMENT_MUSIC_BOX = 17;
    Music.INSTRUMENT_ORGAN = 3;
    Music.INSTRUMENT_PIANO = 1;
    Music.INSTRUMENT_PIZZICATO = 7;
    Music.INSTRUMENT_SAXOPHONE = 11;
    Music.INSTRUMENT_STEEL_DRUM = 18;
    Music.INSTRUMENT_SYNTH_LEAD = 20;
    Music.INSTRUMENT_SYNTH_PAD = 21;
    Music.INSTRUMENT_TROMBONE = 9;
    Music.INSTRUMENT_VIBRAPHONE = 16;
    Music.INSTRUMENT_WOODEN_FLUTE = 13;
    return Music;
}(_1.App));
exports.Music = Music;
