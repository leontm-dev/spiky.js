// Imports
import { App } from "./index";
// Code
/**
 * The sound module is used play sounds in the SPIKE App
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound
 */
export class Sound extends App {
    /**
     * Play a sound in the SPIKE App
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-play
     * @param soundName The sound name as seen in the Word Blocks sound extension
     * @param volume The volume (0-100)
     * @param pitch The pitch of the sound
     * @param pan The pan effect determines which speaker is emitting the sound, with "-100" being only the left speaker, "0" being normal, and "100" being only the right speaker.
     */
    static play(soundName, volume = 100, pitch = 0, pan = 0) {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-set_attributes
     * @param volume The volume (0-100)
     * @param pitch The pitch of the sound
     * @param pan The pan effect determines which speaker is emitting the sound, with "-100" being only the left speaker, "0" being normal, and "100" being only the right speaker.
     */
    static setAttributes(volume, pitch, pan) { }
    /**
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-app-sound-func-stop
     */
    static stop() { }
}
