import { Hub } from ".";
import * as SoundConsts from "../../types/Sound";
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound
 * @extends Hub
 */
export declare class Sound extends Hub {
    readonly variableName: string;
    constructor(variableName?: string);
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
    beep(freq: number, duration: number, volume: number, attack?: number, decay?: number, sustain?: number, release?: number, transition?: number, waveform?: SoundConsts.default, channel?: SoundConsts.default.ANY | SoundConsts.default.DEFAULT): void;
    /**
     * Stops all noise from the hub
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-stop
     */
    stop(): void;
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-volume
     * @param volume The volume to set (0-100)
     */
    volume(volume: number): void;
}
