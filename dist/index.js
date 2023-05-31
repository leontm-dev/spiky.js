"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait_until = exports.wait_for_seconds = exports.MotorPair = exports.Code = exports.Speaker = void 0;
const fs = __importStar(require("fs-extra"));
class Spiky {
    constructor(filename) {
        this.filename = `${filename}.py`;
        this.name = "";
    }
    /**
     * @returns Returns the current file
     */
    compile() {
        fs.writeFile;
    }
}
/**
 * @extends Spiky
 * @description MotorPair objects are used to control 2 motors simultaneously in opposite directions. To be able to use MotorPair, you must initialize both motors.
 */
class MotorPair extends Spiky {
    /**
     *
     * @param {String} name - The name of the MotorPair
     * @param {String} motor1 - The port name of the first motor
     * @param {String} motor2 - The port name of the second motor
     */
    constructor(name, motor1, motor2) {
        super(name);
        this.name = name;
        if (motor1 != undefined && motor2 != undefined) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text =
                        text +
                            `\n${this.name} = MotorPair(${String(motor1)}, ${String(motor2)})`;
                }
                else {
                    console.log(err);
                }
            });
        }
    }
    /**
     *
     * @param {Object} motors - The MotorPair that should move
     * @param {String} motors.motor1 - The port of the first motor of the pair
     * @param {String} motors.motor2 - The port of the second motor of the pair
     * @param {Number} amount - The quantity to move in relation to the specified unit of measurement.
     * @param {String} unit - The unit of measurement specified for the "amount" parameter.
     * @param {Number} steering - The direction and quantity to steer the Driving Base.
     * @param {Number} speed - The motor speed.
     */
    move(amount, unit, steering, speed) {
        if (unit === "cm" ||
            unit === "rotations" ||
            unit === "in" ||
            unit === "degrees" ||
            unit === "seconds") {
            if (steering == undefined) {
                steering = 0;
            }
            if (speed == undefined) {
                speed = 50;
            }
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text =
                        text +
                            `\n${this.name}.move(${amount}, ${unit}, ${steering}, ${speed})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: unit is not one of the allowed values.");
        }
    }
}
exports.MotorPair = MotorPair;
/**
 * @extends Spiky
 */
class Timer extends Spiky {
    /**
     *
     * @param {String} name - Name of the variable which sets the timer
     */
    constructor(name) {
        super(name);
        this.name = name;
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${this.name} = Timer()`;
            }
            else {
                console.log(err);
            }
        });
    }
    reset() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${this.name}.reset()`;
            }
            else {
                console.log(err);
            }
        });
    }
}
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Hub’s programmable Brick Status Light.
 */
class StatusLight extends Spiky {
    /**
     *
     * @param {String} color -  The color which the status light should display
     */
    on(color) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.status_light.on(${String(color.toLowerCase())})`;
            }
            else {
                console.log(err);
            }
        });
    }
    off() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n$hub.status_light.off()`;
            }
            else {
                console.log(err);
            }
        });
    }
}
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to sounds coming out of the Hub.
 */
class Speaker extends Spiky {
    /**
     *
     * @param {Number} [note=60]- The MIDI note number.
     * @param {Number} [seconds=0.2] - The duration of the beep, specified in seconds.
     * @description Plays a beep on the Hub. Your program will not continue until seconds have passed.
     */
    beep(note, seconds) {
        if (note >= 44 && note <= 123) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `\nhub.speaker.beep(${note}, ${seconds})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: note is not within the allowed range of 44-123.");
        }
    }
    /**
     *
     * @param {Number} [note=60] - The MIDI note number.
     * @description Starts playing a beep. The beep will play indefinitely until stop() or another beep method is called.
     */
    start_beep(note) {
        if (note >= 44 && note <= 123) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `\nhub.speaker.start_beep(${note})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: note is not within the allowed range of 44-123");
        }
    }
    /**
     * @description Stops any sound that is playing.
     */
    stop() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.speaker.stop()`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     *
     * @param {Number} [volume=100%] - The new volume percentage.
     * @description Sets the speaker volume. If the assigned volume is out of range, the nearest volume (i.e., 0 or 100) will be used instead. This only sets the volume of the Hub, not the programming app.
     */
    set_volume(volume) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.speaker.set_volume(${volume})`;
            }
            else {
                console.log(err);
            }
        });
    }
}
exports.Speaker = Speaker;
/**
 * @extends Spiky
 * @description To use the app, you must first initialize it.
 */
class App extends Spiky {
    /**
     *
     * @param {String} name - The name of the app variable
     */
    constructor(name) {
        super(name);
        this.name = name;
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${name} = App()`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @description Plays a sound from the device (i.e., tablet or computer). The program will not continue until the sound has finished playing. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The sound name of the sound that should be played!
     * @param {Number} [volume=100%] - The sound volume (0%-100%)
     */
    play_sound(sound, volume) {
        let sounds = [
            "Alert",
            "Applause 1",
            "Applause 2",
            "Applause 3",
            "Baa",
            "Bang 1",
            "Bang 2",
            "Basketball Bounce",
            "Big Boing",
            "Bird",
            "Bite",
            "Boat Horn 1",
            "Boat Horn 2",
            "Bonk",
            "Boom Cloud",
            "Boop Bing Bop",
            "Bowling Strike",
            "Burp 1",
            "Burp 2",
            "Burp 3",
            "Car Accelerate 1",
            "Car Accelerating 2",
            "Car Horn",
            "Car Idle",
            "Car Reverse",
            "Car Skid 1",
            "Car Skid 2",
            "Car Vroom",
            "Cat Angry",
            "Cat Happy",
            "Cat Hiss",
            "Cat Meow 1",
            "Cat Meow 2",
            "Cat Meow 3",
            "Cat Purring",
            "Cat Whining",
            "Chatter",
            "Chirp",
            "Clang",
            "Clock Ticking",
            "Clown Honk 1",
            "Clown Honk 2",
            "Clown Honk 3",
            "Coin",
            "Collect",
            "Connect",
            "Crank",
            "Crazy Laugh",
            "Croak",
            "Crowd Gasp",
            "Crunch",
            "Cuckoo",
            "Cymbal Crash",
            "Disconnect",
            "Dog Bark 1",
            "Dog Bark 2",
            "Dog Bark 3",
            "Dog Whining 1",
            "Dog Whining 2",
            "Doorbell 1",
            "Doorbell 2",
            "Doorbell 3",
            "Door Closing",
            "Door Creek 1",
            "Door Creek 2",
            "Door Handle",
            "Door Knock",
            "Door Slam 1",
            "Door Slam 2",
            "Drum Roll",
            "Dun Dun Dunnn",
            "Emotional Piano",
            "Fart 1",
            "Fart 2",
            "Fart 3",
            "Footsteps",
            "Gallop",
            "Glass Breaking",
            "Glug",
            "Goal Cheer",
            "Gong",
            "Growl",
            "Grunt",
            "Hammer Hit",
            "Head Shake",
            "High Whoosh",
            "Jump",
            "Jungle Frogs",
            "Laser 1",
            "Laser 2",
            "Laser 3",
            "Laughing Baby 1",
            "Laughing Baby 2",
            "Laughing Boy",
            "Laughing Crowd 1",
            "Laughing Crowd 2",
            "Laughing Girl",
            "Laughing Male",
            "Lose",
            "Low Boing",
            "Low Squeak",
            "Low Whoosh",
            "Magic Spell",
            "Male Jump 1",
            "Male Jump 2",
            "Moo",
            "Ocean Wave",
            "Oops",
            "Orchestra Tuning",
            "Party Blower",
            "Pew",
            "Ping Pong Hit",
            "Plane Flying By",
            "Plane Motor Running",
            "Plane Starting",
            "Pluck",
            "Police Siren 1",
            "Police Siren 2",
            "Police Siren 3",
            "Punch",
            "Rain",
            "Ricochet",
            "Rimshot",
            "Ring Tone",
            "Rip",
            "Robot 1",
            "Robot 2",
            "Robot 3",
            "Rocket Explosion Rumble",
            "Rooster",
            "Scrambling Feet",
            "Screech",
            "Seagulls",
            "Service Announcement",
            "Sewing Machine",
            "Ship Bell",
            "Siren Whistle",
            "Skid",
            "Slide Whistle 1",
            "Slide Whistle 2",
            "Sneaker Squeak",
            "Snoring",
            "Snort",
            "Space Ambience",
            "Space Flyby",
            "Space Noise",
            "Splash",
            "Sport Whistle 1",
            "Sport Whistle 2",
            "Squeaky Toy",
            "Squish Pop",
            "Suction Cup",
            "Tada",
            "Telephone Ring 2",
            "Telephone Ring",
            "Teleport 2",
            "Teleport 3",
            "Teleport",
            "Tennis Hit",
            "Thunder Storm",
            "Toliet Flush",
            "Toy Honk",
            "Toy Zing",
            "Traffic",
            "Train Breaks",
            "Train Horn 1",
            "Train Horn 2",
            "Train Horn 3",
            "Train On Tracks",
            "Train Signal 1",
            "Train Signal 2",
            "Train Start",
            "Train Whistle",
            "Triumph",
            "Tropical Birds",
            "Wand",
            "Water Drop",
            "Whistle Thump",
            "Whiz 1",
            "Whiz 2",
            "Window Breaks",
            "Win",
            "Wobble",
            "Wood Tap",
            "Zip",
        ];
        if (sounds.includes(sound)) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `${this.name}.play_sound(${sound}, volume = ${volume})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("SoundError: sound not found.");
        }
    }
    /**
     * @description Starts playing a sound from your device (i.e., tablet or computer). The program will not wait for the sound to finish playing before proceeding to the next command. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The name of the sound to play.
     * @param {Number} [volume=100%] - The volume at which the sound will be played
     */
    start_sound(sound, volume) {
        let sounds = [
            "Alert",
            "Applause 1",
            "Applause 2",
            "Applause 3",
            "Baa",
            "Bang 1",
            "Bang 2",
            "Basketball Bounce",
            "Big Boing",
            "Bird",
            "Bite",
            "Boat Horn 1",
            "Boat Horn 2",
            "Bonk",
            "Boom Cloud",
            "Boop Bing Bop",
            "Bowling Strike",
            "Burp 1",
            "Burp 2",
            "Burp 3",
            "Car Accelerate 1",
            "Car Accelerating 2",
            "Car Horn",
            "Car Idle",
            "Car Reverse",
            "Car Skid 1",
            "Car Skid 2",
            "Car Vroom",
            "Cat Angry",
            "Cat Happy",
            "Cat Hiss",
            "Cat Meow 1",
            "Cat Meow 2",
            "Cat Meow 3",
            "Cat Purring",
            "Cat Whining",
            "Chatter",
            "Chirp",
            "Clang",
            "Clock Ticking",
            "Clown Honk 1",
            "Clown Honk 2",
            "Clown Honk 3",
            "Coin",
            "Collect",
            "Connect",
            "Crank",
            "Crazy Laugh",
            "Croak",
            "Crowd Gasp",
            "Crunch",
            "Cuckoo",
            "Cymbal Crash",
            "Disconnect",
            "Dog Bark 1",
            "Dog Bark 2",
            "Dog Bark 3",
            "Dog Whining 1",
            "Dog Whining 2",
            "Doorbell 1",
            "Doorbell 2",
            "Doorbell 3",
            "Door Closing",
            "Door Creek 1",
            "Door Creek 2",
            "Door Handle",
            "Door Knock",
            "Door Slam 1",
            "Door Slam 2",
            "Drum Roll",
            "Dun Dun Dunnn",
            "Emotional Piano",
            "Fart 1",
            "Fart 2",
            "Fart 3",
            "Footsteps",
            "Gallop",
            "Glass Breaking",
            "Glug",
            "Goal Cheer",
            "Gong",
            "Growl",
            "Grunt",
            "Hammer Hit",
            "Head Shake",
            "High Whoosh",
            "Jump",
            "Jungle Frogs",
            "Laser 1",
            "Laser 2",
            "Laser 3",
            "Laughing Baby 1",
            "Laughing Baby 2",
            "Laughing Boy",
            "Laughing Crowd 1",
            "Laughing Crowd 2",
            "Laughing Girl",
            "Laughing Male",
            "Lose",
            "Low Boing",
            "Low Squeak",
            "Low Whoosh",
            "Magic Spell",
            "Male Jump 1",
            "Male Jump 2",
            "Moo",
            "Ocean Wave",
            "Oops",
            "Orchestra Tuning",
            "Party Blower",
            "Pew",
            "Ping Pong Hit",
            "Plane Flying By",
            "Plane Motor Running",
            "Plane Starting",
            "Pluck",
            "Police Siren 1",
            "Police Siren 2",
            "Police Siren 3",
            "Punch",
            "Rain",
            "Ricochet",
            "Rimshot",
            "Ring Tone",
            "Rip",
            "Robot 1",
            "Robot 2",
            "Robot 3",
            "Rocket Explosion Rumble",
            "Rooster",
            "Scrambling Feet",
            "Screech",
            "Seagulls",
            "Service Announcement",
            "Sewing Machine",
            "Ship Bell",
            "Siren Whistle",
            "Skid",
            "Slide Whistle 1",
            "Slide Whistle 2",
            "Sneaker Squeak",
            "Snoring",
            "Snort",
            "Space Ambience",
            "Space Flyby",
            "Space Noise",
            "Splash",
            "Sport Whistle 1",
            "Sport Whistle 2",
            "Squeaky Toy",
            "Squish Pop",
            "Suction Cup",
            "Tada",
            "Telephone Ring 2",
            "Telephone Ring",
            "Teleport 2",
            "Teleport 3",
            "Teleport",
            "Tennis Hit",
            "Thunder Storm",
            "Toliet Flush",
            "Toy Honk",
            "Toy Zing",
            "Traffic",
            "Train Breaks",
            "Train Horn 1",
            "Train Horn 2",
            "Train Horn 3",
            "Train On Tracks",
            "Train Signal 1",
            "Train Signal 2",
            "Train Start",
            "Train Whistle",
            "Triumph",
            "Tropical Birds",
            "Wand",
            "Water Drop",
            "Whistle Thump",
            "Whiz 1",
            "Whiz 2",
            "Window Breaks",
            "Win",
            "Wobble",
            "Wood Tap",
            "Zip",
        ];
        if (sounds.includes(sound)) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text =
                        text + `${this.name}.start_sound(${sound}, volume = ${volume})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("SoundError: sound not found.");
        }
    }
}
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Light Matrix.
 */
class LightMatrix extends Spiky {
    /**
     * @description Shows an image on the Light Matrix.
     * @param {String} image - Name of the image.
     * @param {Number} [brightness=100] - Brightness of the image from 0-100
     */
    show_image(image, brightness) {
        let images = [
            "ANGRY",
            "ARROW_E",
            "ARROW_N",
            "ARROW_NE",
            "ARROW_NW",
            "ARROW_S",
            "ARROW_SE",
            "ARROW_SW",
            "ARROW_W",
            "ASLEEP",
            "BUTTERFLY",
            "CHESSBOARD",
            "CLOCK1",
            "CLOCK10",
            "CLOCK11",
            "CLOCK12",
            "CLOCK2",
            "CLOCK3",
            "CLOCK4",
            "CLOCK5",
            "CLOCK6",
            "CLOCK7",
            "CLOCK8",
            "CLOCK9",
            "CONFUSED",
            "COW",
            "DIAMOND",
            "DIAMOND_SMALL",
            "DUCK",
            "FABULOUS",
            "GHOST",
            "GIRAFFE",
            "GO_RIGHT",
            "GO_LEFT",
            "GO_UP",
            "GO_DOWN",
            "HAPPY",
            "HEART",
            "HEART_SMALL",
            "HOUSE",
            "MEH",
            "MUSIC_CROTCHET",
            "MUSIC_QUAVER",
            "MUSIC_QUAVERS",
            "NO",
            "PACMAN",
            "PITCHFORK",
            "RABBIT",
            "ROLLERSKATE",
            "SAD",
            "SILLY",
            "SKULL",
            "SMILE",
            "SNAKE",
            "SQUARE",
            "SQUARE_SMALL",
            "STICKFIGURE",
            "SURPRISED",
            "SWORD",
            "TARGET",
            "TORTOISE",
            "TRIANGLE",
            "TRIANGLE_LEFT",
            "TSHIRT",
            "UMBRELLA",
            "XMAS",
            "YES",
        ];
        if (images.includes(image)) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text =
                        text +
                            `\nhub.light_matrix.show_image(${String(image)}, brightness = ${brightness})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: image is not one of the allowed values.");
        }
    }
    /**
     * @description Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @param {Number} x - Pixel position, counting from the left.
     * @param {Number} y - Pixel position, counting from the top.
     * @param {Number} [brightness=100] - Brightness of the pixel
     */
    set_pixel(x, y, brightness) {
        if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text =
                        text +
                            `\nhub.light_matrix.set_pixel(${x}, ${y}, brightness = ${brightness})`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: x, y is not within the allowed range of 0-4.");
        }
    }
    /**
     *
     * @param {String} text - Text to write.
     * @description Displays text on the Light Matrix, one letter at a time, scrolling from right to left. Your program will not continue until all of the letters have been shown.
     */
    write(text) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.light_matrix.write(${String(text)})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @description Turns off all of the pixels on the Light Matrix.
     */
    off() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.light_matrix.off()`;
            }
            else {
                console.log(err);
            }
        });
    }
}
/**
 * @extends Spiky
 * @description The math module provides some basic mathematical functions for working with floating-point numbers.
 */
class Math extends Spiky {
    /**
     * @returns Returns the inverse cosine of "x."
     * @param {Number} x
     */
    acos(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nacos(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the inverse hyperbolic cosine of "x."
     * @param {Number} x
     */
    acosh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nacosh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the inverse sine of "x."
     * @param {Number} x
     */
    asin(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nasin(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    asinh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nasinh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     *
     * @returns Returns the inverse tangent of "x."
     * @param {Number} x
     */
    atan(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\natan(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the principal value of the inverse tangent of "y/x."
     * @param {Number} x
     * @param {Number} y
     */
    atan2(y, x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\natan2(${y}, ${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the inverse hyperbolic tangent of "x."
     * @param {Number} x
     */
    atanh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\natanh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns an integer ("x" rounded toward positive infinity).
     * @param {Number} x
     */
    ceil(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nceil(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "x" with the sign of "y."
     * @param {Number} x
     * @param {Number} y
     */
    copysign(x, y) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ncopysign(${x}, ${y})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the cosine of "x."
     * @param {Number} x
     */
    cos(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ncos(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    cosh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ncosh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns radians ‘x’ converted to degrees.
     * @param {Number} x
     */
    degrees(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ndegrees(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the error function of "x."
     * @param {Number} x
     */
    erf(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nerf(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the complementary error function of "x."
     * @param {Number} x
     */
    erfc(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nerfc(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the exponential of "x."
     * @param {Number} x
     */
    exp(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nexp(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns exp(x) - 1.
     * @param {Number} x
     */
    expm1(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nexpm1(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the absolute value of "x."
     * @param {Number} x
     */
    fabs(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nfabs(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns an integer ("x" rounded toward negative infinity).
     * @param {Number} x
     */
    floor(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nfloor(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the remainder of "x/y."
     * @param {Number} x
     * @param {Number} y
     */
    fmod(x, y) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nfmod(${x}, ${y})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Decomposes a floating-point number into its mantissa and exponent. The Returned value is the tuple (m, e) such that x == m * 2**e exactly. If x == 0, the function Returns (0.0, 0). Otherwise, the relation 0.5 <= abs(m) < 1 holds.
     * @param {Number} x
     */
    frexp(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nfrexp(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the gamma function of "x."
     * @param {Number} x
     */
    gamma(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ngamma(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "true" if "x" is finite.
     * @param {Number} x
     */
    isfinite(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nisfinite(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "true" if "x" is infinite.
     * @param {Number} x
     */
    isinf(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nisinf(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "true" if "x" is not-a-number
     * @param {Number} x
     */
    isnan(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nisnan(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns x * (2**exp).
     * @param {Number} x
     * @param {Number} exp
     */
    ldexp(x, exp) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nldexp(${x}, ${exp})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the natural logarithm of the gamma function of "x."
     * @param {Number} x
     */
    lgamma(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nlgamme(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the natural logarithm of "x."
     * @param {Number} x
     */
    log(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nlog(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the base-10 logarithm of "x."
     * @param {Number} x
     */
    log10(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nlog10(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the base-2 logarithm of "x."
     * @param {Number} x
     */
    log2(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nlog2(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns a tuple of two floats (the fractional and integral parts of "x"). Both Returned values have the same sign as "x."
     * @param {Number} x
     */
    modf(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nmodf(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "x" to the power of "y."
     * @param {Number} x
     * @param {Number} y
     */
    pow(x, y) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\npow(${x}, ${y})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns "degrees x" converted to radians.
     * @param {Number} x
     */
    radians(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nradians(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the sine of "x."
     * @param {Number} x
     */
    sin(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nsin(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the hyperbolic sine of "x."
     * @param {Number} x
     */
    sinh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nsinh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the square root of "x."
     * @param {Number} x
     */
    sqrt(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nsqrt(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the tangent of "x."
     * @param {Number} x
     */
    tan(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ntan(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns the hyperbolic tangent of "x."
     * @param {Number} x
     */
    tanh(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ntanh(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @returns Returns an integer ("x" rounded toward "0").
     * @param {Number} x
     */
    trunc(x) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\ntrunc(${x})`;
            }
            else {
                console.log(err);
            }
        });
    }
}
/**
 * @extends Spiky
 * @description To use the Color Sensor, you must first initialize it.
 */
class ColorSensor extends Spiky {
    /**
     *
     * @param {String} name
     * @param {String} port
     */
    constructor(name, port) {
        super(name);
        this.name = name;
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text =
                    text + `\n${this.name} = ColorSensor(${String(port).toUpperCase()})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @description Lights up all of the lights on the Color Sensor at the specified brightness. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} [brightness=100%] - The desired brightness of the lights on the Color Sensor.
     */
    light_up_all(brightness) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${this.name}.light_up_all(${brightness})`;
            }
            else {
                console.log(err);
            }
        });
    }
    /**
     * @description Sets the brightness of the individual lights on the Color Sensor. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} light_1 - The desired brightness of light 1.
     * @param {Number} light_2 - The desired brightness of light 2.
     * @param {Number} light_3 - The desired brightness of light 3.
     */
    light_up(light_1, light_2, light_3) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text =
                    text + `\n${this.name}.light_up(${light_1}, ${light_2}, ${light_3})`;
            }
            else {
                console.log(err);
            }
        });
    }
}
/**
 * @description Waits for a specified number of seconds before continuing the program.
 * @param {Number} seconds The time to wait, specified in seconds.
 */
function wait_for_seconds(seconds) {
    if (seconds <= 0) {
        throw new Error("ValueError: seconds is not at least 0.");
    }
}
exports.wait_for_seconds = wait_for_seconds;
function wait_until() { }
exports.wait_until = wait_until;
class Wait extends Spiky {
    /**
     *
     * @param {Number} time - Wait for x seconds
     */
    wait_for_seconds(time) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nwait_for_seconds(${time})`;
            }
            else {
                console.log(err);
            }
        });
    }
}
class Code extends Spiky {
    /**
     *
     * @param {String} code - Write custom python code to fullfil your dreams!
     */
    custom(code) {
        if (code != "") {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `${code}`;
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            new Error("ValueError: code is not defined!");
        }
    }
}
exports.Code = Code;
exports.default = Spiky;
