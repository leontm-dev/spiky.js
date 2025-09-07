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

  DRUM_BASS = 2;
  DRUM_BONGO = 13;
  DRUM_CABASA = 15;
  DRUM_CLAVES = 9;
  DRUM_CLOSED_HI_HAT = 6;
  DRUM_CONGA = 14;
  DRUM_COWBELL = 11;
  DRUM_CRASH_CYMBAL = 4;
  DRUM_CUICA = 18;
  DRUM_GUIRO = 16;
  DRUM_HAND_CLAP = 8;
  DRUM_OPEN_HI_HAT = 5;
  DRUM_SIDE_STICK = 3;
  DRUM_SNARE = 1;
  DRUM_TAMBOURINE = 7;
  DRUM_TRIANGLE = 12;
  DRUM_VIBRASLAP = 17;
  DRUM_WOOD_BLOCK = 10;
  INSTRUMENT_BASS = 6;
  INSTRUMENT_BASSOON = 14;
  INSTRUMENT_CELLO = 8;
  INSTRUMENT_CHOIR = 15;
  INSTRUMENT_CLARINET = 10;
  INSTRUMENT_ELECTRIC_GUITAR = 5;
  INSTRUMENT_ELECTRIC_PIANO = 2;
  INSTRUMENT_FLUTE = 12;
  INSTRUMENT_GUITAR = 4;
  INSTRUMENT_MARIMBA = 19;
  INSTRUMENT_MUSIC_BOX = 17;
  INSTRUMENT_ORGAN = 3;
  INSTRUMENT_PIANO = 1;
  INSTRUMENT_PIZZICATO = 7;
  INSTRUMENT_SAXOPHONE = 11;
  INSTRUMENT_STEEL_DRUM = 18;
  INSTRUMENT_SYNTH_LEAD = 20;
  INSTRUMENT_SYNTH_PAD = 21;
  INSTRUMENT_TROMBONE = 9;
  INSTRUMENT_VIBRAPHONE = 16;
  INSTRUMENT_WOODEN_FLUTE = 13;
}
