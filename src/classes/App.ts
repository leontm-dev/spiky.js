// Imports

import Spiky from '../index';
import { PlayableSound, AppClass } from '../types/app';

// Exports

class App extends Spiky {
    
    
        /**
         *
         * @param {String} name - The name of the app variable
         */
        constructor(name: string) {
          this.name = name;
          fs.readFile(this.filename, (err, data) => {
            if (!err) {
              let text = String(data);
              text = text + `\n${name} = App()`;
            } else {
              console.log(err);
            }
          });
        }
        /**
         * @description Plays a sound from the device (i.e., tablet or computer). The program will not continue until the sound has finished playing. If a sound with the specified name isn’t found, nothing will happen.
         * @param {PlayableSound} sound - The sound name of the sound that should be played!
         * @param {Number} [volume=100%] - The sound volume (0%-100%)
         */
        play_sound(sound: PlayableSound, volume: number) {
          
      
          if (sounds.includes(sound)) {
            fs.readFile(this.filename, (err, data) => {
              if (!err) {
                let text = String(data);
                text = text + `${this.name}.play_sound(${sound}, volume = ${volume})`;
              } else {
                console.log(err);
              }
            });
          } else {
            return new Error("SoundError: sound not found.");
          }
        }
        /**
         * @description Starts playing a sound from your device (i.e., tablet or computer). The program will not wait for the sound to finish playing before proceeding to the next command. If a sound with the specified name isn’t found, nothing will happen.
         * @param {PlayableSound} sound - The name of the sound to play.
         * @param {Number} [volume=100%] - The volume at which the sound will be played
         */
        start_sound(sound: PlayableSound, volume: number) {
          if (sounds.includes(sound)) {
            fs.readFile(this.filename, (err, data) => {
              if (!err) {
                let text = String(data);
                text =
                  text + `${this.name}.start_sound(${sound}, volume = ${volume})`;
              } else {
                console.log(err);
              }
            });
          } else {
            return new Error("SoundError: sound not found.");
          }
        }
      
}
export default App;