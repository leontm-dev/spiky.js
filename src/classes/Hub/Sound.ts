// Imports

import { Hub } from ".";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound
 * @extends Hub
 */
export class Sound extends Hub {
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
  static beep(
    freq: number,
    duration: number,
    volume: number,
    attack: number = 0,
    decay: number = 0,
    sustain: number = 100,
    release: number = 0,
    transition: number = 10,
    waveform: number = 1,
    channel: number = -1
  ): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  /**
   * Stops all noise from the hub
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-stop
   */
  static stop(): void {}
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-volume
   * @param volume The volume to set (0-100)
   */
  static volume(volume: number): void {}

  static ANY = -2;
  static DEFAULT = -1;
  static WAVEFORM_SINE = 1;
  static WAVEFORM_SAWTOOTH = 3;
  static WAVEFORM_SQUARE = 2;
  static WAVEFORM_TRIANGLE = 1;
}
