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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DRUM_BASS = 2;
        _this.DRUM_BONGO = 13;
        _this.DRUM_CABASA = 15;
        _this.DRUM_CLAVES = 9;
        _this.DRUM_CLOSED_HI_HAT = 6;
        _this.DRUM_CONGA = 14;
        _this.DRUM_COWBELL = 11;
        _this.DRUM_CRASH_CYMBAL = 4;
        _this.DRUM_CUICA = 18;
        _this.DRUM_GUIRO = 16;
        _this.DRUM_HAND_CLAP = 8;
        _this.DRUM_OPEN_HI_HAT = 5;
        _this.DRUM_SIDE_STICK = 3;
        _this.DRUM_SNARE = 1;
        _this.DRUM_TAMBOURINE = 7;
        _this.DRUM_TRIANGLE = 12;
        _this.DRUM_VIBRASLAP = 17;
        _this.DRUM_WOOD_BLOCK = 10;
        _this.INSTRUMENT_BASS = 6;
        _this.INSTRUMENT_BASSOON = 14;
        _this.INSTRUMENT_CELLO = 8;
        _this.INSTRUMENT_CHOIR = 15;
        _this.INSTRUMENT_CLARINET = 10;
        _this.INSTRUMENT_ELECTRIC_GUITAR = 5;
        _this.INSTRUMENT_ELECTRIC_PIANO = 2;
        _this.INSTRUMENT_FLUTE = 12;
        _this.INSTRUMENT_GUITAR = 4;
        _this.INSTRUMENT_MARIMBA = 19;
        _this.INSTRUMENT_MUSIC_BOX = 17;
        _this.INSTRUMENT_ORGAN = 3;
        _this.INSTRUMENT_PIANO = 1;
        _this.INSTRUMENT_PIZZICATO = 7;
        _this.INSTRUMENT_SAXOPHONE = 11;
        _this.INSTRUMENT_STEEL_DRUM = 18;
        _this.INSTRUMENT_SYNTH_LEAD = 20;
        _this.INSTRUMENT_SYNTH_PAD = 21;
        _this.INSTRUMENT_TROMBONE = 9;
        _this.INSTRUMENT_VIBRAPHONE = 16;
        _this.INSTRUMENT_WOODEN_FLUTE = 13;
        return _this;
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
    return Music;
}(_1.App));
exports.Music = Music;
