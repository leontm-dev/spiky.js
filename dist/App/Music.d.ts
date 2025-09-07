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
    DRUM_BASS: number;
    DRUM_BONGO: number;
    DRUM_CABASA: number;
    DRUM_CLAVES: number;
    DRUM_CLOSED_HI_HAT: number;
    DRUM_CONGA: number;
    DRUM_COWBELL: number;
    DRUM_CRASH_CYMBAL: number;
    DRUM_CUICA: number;
    DRUM_GUIRO: number;
    DRUM_HAND_CLAP: number;
    DRUM_OPEN_HI_HAT: number;
    DRUM_SIDE_STICK: number;
    DRUM_SNARE: number;
    DRUM_TAMBOURINE: number;
    DRUM_TRIANGLE: number;
    DRUM_VIBRASLAP: number;
    DRUM_WOOD_BLOCK: number;
    INSTRUMENT_BASS: number;
    INSTRUMENT_BASSOON: number;
    INSTRUMENT_CELLO: number;
    INSTRUMENT_CHOIR: number;
    INSTRUMENT_CLARINET: number;
    INSTRUMENT_ELECTRIC_GUITAR: number;
    INSTRUMENT_ELECTRIC_PIANO: number;
    INSTRUMENT_FLUTE: number;
    INSTRUMENT_GUITAR: number;
    INSTRUMENT_MARIMBA: number;
    INSTRUMENT_MUSIC_BOX: number;
    INSTRUMENT_ORGAN: number;
    INSTRUMENT_PIANO: number;
    INSTRUMENT_PIZZICATO: number;
    INSTRUMENT_SAXOPHONE: number;
    INSTRUMENT_STEEL_DRUM: number;
    INSTRUMENT_SYNTH_LEAD: number;
    INSTRUMENT_SYNTH_PAD: number;
    INSTRUMENT_TROMBONE: number;
    INSTRUMENT_VIBRAPHONE: number;
    INSTRUMENT_WOODEN_FLUTE: number;
}
