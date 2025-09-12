import { App } from ".";
/**
 * The music module is used make music in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music
 */
export declare class Music extends App {
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_drum
     * @param drum The drum name. See all available values in the app.sound module.
     */
    static playDrum(drum: number): void;
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-music-func-play_instrument
     * @param instrument The instrument name. See all available values in the app.music module.
     * @param note The midi note to play (0-130)
     * @param duration The duration in milliseconds
     */
    static playInstrument(instrument: number, note: number, duration: number): void;
    static DRUM_BASS: number;
    static DRUM_BONGO: number;
    static DRUM_CABASA: number;
    static DRUM_CLAVES: number;
    static DRUM_CLOSED_HI_HAT: number;
    static DRUM_CONGA: number;
    static DRUM_COWBELL: number;
    static DRUM_CRASH_CYMBAL: number;
    static DRUM_CUICA: number;
    static DRUM_GUIRO: number;
    static DRUM_HAND_CLAP: number;
    static DRUM_OPEN_HI_HAT: number;
    static DRUM_SIDE_STICK: number;
    static DRUM_SNARE: number;
    static DRUM_TAMBOURINE: number;
    static DRUM_TRIANGLE: number;
    static DRUM_VIBRASLAP: number;
    static DRUM_WOOD_BLOCK: number;
    static INSTRUMENT_BASS: number;
    static INSTRUMENT_BASSOON: number;
    static INSTRUMENT_CELLO: number;
    static INSTRUMENT_CHOIR: number;
    static INSTRUMENT_CLARINET: number;
    static INSTRUMENT_ELECTRIC_GUITAR: number;
    static INSTRUMENT_ELECTRIC_PIANO: number;
    static INSTRUMENT_FLUTE: number;
    static INSTRUMENT_GUITAR: number;
    static INSTRUMENT_MARIMBA: number;
    static INSTRUMENT_MUSIC_BOX: number;
    static INSTRUMENT_ORGAN: number;
    static INSTRUMENT_PIANO: number;
    static INSTRUMENT_PIZZICATO: number;
    static INSTRUMENT_SAXOPHONE: number;
    static INSTRUMENT_STEEL_DRUM: number;
    static INSTRUMENT_SYNTH_LEAD: number;
    static INSTRUMENT_SYNTH_PAD: number;
    static INSTRUMENT_TROMBONE: number;
    static INSTRUMENT_VIBRAPHONE: number;
    static INSTRUMENT_WOODEN_FLUTE: number;
}
