// Imports

import { App } from ".";

// Code

/**
 * The music module is used make music in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music
 */
export class Music extends App {
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_drum
   * @param drum The drum name. See all available values in the app.sound module.
   */
  static playDrum(drum: number): void {}

  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_instrument
   * @param instrument The instrument name. See all available values in the app.music module.
   * @param note The midi note to play (0-130)
   * @param duration The duration in milliseconds
   */
  static playInstrument(
    instrument: number,
    note: number,
    duration: number
  ): void {}

  static DRUM_BASS = 2;
  static DRUM_BONGO = 13;
  static DRUM_CABASA = 15;
  static DRUM_CLAVES = 9;
  static DRUM_CLOSED_HI_HAT = 6;
  static DRUM_CONGA = 14;
  static DRUM_COWBELL = 11;
  static DRUM_CRASH_CYMBAL = 4;
  static DRUM_CUICA = 18;
  static DRUM_GUIRO = 16;
  static DRUM_HAND_CLAP = 8;
  static DRUM_OPEN_HI_HAT = 5;
  static DRUM_SIDE_STICK = 3;
  static DRUM_SNARE = 1;
  static DRUM_TAMBOURINE = 7;
  static DRUM_TRIANGLE = 12;
  static DRUM_VIBRASLAP = 17;
  static DRUM_WOOD_BLOCK = 10;
  static INSTRUMENT_BASS = 6;
  static INSTRUMENT_BASSOON = 14;
  static INSTRUMENT_CELLO = 8;
  static INSTRUMENT_CHOIR = 15;
  static INSTRUMENT_CLARINET = 10;
  static INSTRUMENT_ELECTRIC_GUITAR = 5;
  static INSTRUMENT_ELECTRIC_PIANO = 2;
  static INSTRUMENT_FLUTE = 12;
  static INSTRUMENT_GUITAR = 4;
  static INSTRUMENT_MARIMBA = 19;
  static INSTRUMENT_MUSIC_BOX = 17;
  static INSTRUMENT_ORGAN = 3;
  static INSTRUMENT_PIANO = 1;
  static INSTRUMENT_PIZZICATO = 7;
  static INSTRUMENT_SAXOPHONE = 11;
  static INSTRUMENT_STEEL_DRUM = 18;
  static INSTRUMENT_SYNTH_LEAD = 20;
  static INSTRUMENT_SYNTH_PAD = 21;
  static INSTRUMENT_TROMBONE = 9;
  static INSTRUMENT_VIBRAPHONE = 16;
  static INSTRUMENT_WOODEN_FLUTE = 13;
}
