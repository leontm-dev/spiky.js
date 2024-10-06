// Imports

import { writeLine } from "../../functions/writeLine";
import { Hub } from ".";
import * as SoundConsts from "../../types/Sound";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound
 * @extends Hub
 */
export class Sound extends Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    super();
    if (!variableName) {
      this.variableName = "sound";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = sound`, "code");
    }
    writeLine("from hub import sound", "imports");
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
  beep(
    freq: number,
    duration: number,
    volume: number,
    attack?: number,
    decay?: number,
    sustain?: number,
    release?: number,
    transition?: number,
    waveform?: SoundConsts.default,
    channel?: SoundConsts.default.ANY | SoundConsts.default.DEFAULT
  ) {
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
  }
  /**
   * Stops all noise from the hub
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-stop
   */
  stop() {}
  /**
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-sound-func-volume
   * @param volume The volume to set (0-100)
   */
  volume(volume: number) {
    if (volume < 0 || volume > 100) {
      throw new Error("Volume must be between 0 and 100");
    }
  }
}
