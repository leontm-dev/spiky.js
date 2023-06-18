"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.LightMatrix = exports.MathematicalFunctions = exports.wait_until = exports.wait_for_seconds = exports.MotorPair = exports.Buttons = exports.Speaker = exports.Code = exports.Wait = exports.ColorSensor = exports.App = void 0;
var fs = __importStar(require("fs-extra"));
var Spiky = /** @class */ (function () {
    function Spiky(filename) {
        this.filename = "".concat(filename, ".py");
        this.name = "";
    }
    /**
     * @returns Returns the current file
     */
    Spiky.prototype.compile = function () { };
    return Spiky;
}());
/**
 * @extends Spiky
 * @description To use the app, you must first initialize it.
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    /**
     *
     * @param {String} name - The name of the app variable
     */
    function App(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        fs.readFile(_this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\n".concat(name, " = App()");
            }
            else {
                console.log(err);
            }
        });
        return _this;
    }
    /**
     * @description Plays a sound from the device (i.e., tablet or computer). The program will not continue until the sound has finished playing. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The sound name of the sound that should be played!
     * @param {Number} [volume=100%] - The sound volume (0%-100%)
     */
    App.prototype.play_sound = function (sound, volume) {
        var _this = this;
        var sounds = [
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
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text = text + "".concat(_this.name, ".play_sound(").concat(sound, ", volume = ").concat(volume, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("SoundError: sound not found.");
        }
    };
    /**
     * @description Starts playing a sound from your device (i.e., tablet or computer). The program will not wait for the sound to finish playing before proceeding to the next command. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The name of the sound to play.
     * @param {Number} [volume=100%] - The volume at which the sound will be played
     */
    App.prototype.start_sound = function (sound, volume) {
        var _this = this;
        var sounds = [
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
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text =
                        text + "".concat(_this.name, ".start_sound(").concat(sound, ", volume = ").concat(volume, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("SoundError: sound not found.");
        }
    };
    return App;
}(Spiky));
exports.App = App;
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Buttons;
}(Spiky));
exports.Buttons = Buttons;
/**
 * @extends Spiky
 * @description MotorPair objects are used to control 2 motors simultaneously in opposite directions. To be able to use MotorPair, you must initialize both motors.
 */
var MotorPair = /** @class */ (function (_super) {
    __extends(MotorPair, _super);
    /**
     *
     * @param {String} name - The name of the MotorPair
     * @param {String} motor1 - The port name of the first motor
     * @param {String} motor2 - The port name of the second motor
     */
    function MotorPair(name, motor1, motor2) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        if (motor1 != undefined && motor2 != undefined) {
            fs.readFile(_this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text =
                        text +
                            "\n".concat(_this.name, " = MotorPair(").concat(String(motor1), ", ").concat(String(motor2), ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        return _this;
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
    MotorPair.prototype.move = function (amount, unit, steering, speed) {
        var _this = this;
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
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text =
                        text +
                            "\n".concat(_this.name, ".move(").concat(amount, ", ").concat(unit, ", ").concat(steering, ", ").concat(speed, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: unit is not one of the allowed values.");
        }
    };
    return MotorPair;
}(Spiky));
exports.MotorPair = MotorPair;
/**
 * @extends Spiky
 */
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    /**
     *
     * @param {String} name - Name of the variable which sets the timer
     */
    function Timer(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        fs.readFile(_this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\n".concat(_this.name, " = Timer()");
            }
            else {
                console.log(err);
            }
        });
        return _this;
    }
    Timer.prototype.reset = function () {
        var _this = this;
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\n".concat(_this.name, ".reset()");
            }
            else {
                console.log(err);
            }
        });
    };
    return Timer;
}(Spiky));
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Hub’s programmable Brick Status Light.
 */
var StatusLight = /** @class */ (function (_super) {
    __extends(StatusLight, _super);
    function StatusLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {String} color -  The color which the status light should display
     */
    StatusLight.prototype.on = function (color) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nhub.status_light.on(".concat(String(color.toLowerCase()), ")");
            }
            else {
                console.log(err);
            }
        });
    };
    StatusLight.prototype.off = function () {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\n$hub.status_light.off()";
            }
            else {
                console.log(err);
            }
        });
    };
    return StatusLight;
}(Spiky));
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to sounds coming out of the Hub.
 */
var Speaker = /** @class */ (function (_super) {
    __extends(Speaker, _super);
    function Speaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {Number} [note=60]- The MIDI note number.
     * @param {Number} [seconds=0.2] - The duration of the beep, specified in seconds.
     * @description Plays a beep on the Hub. Your program will not continue until seconds have passed.
     */
    Speaker.prototype.beep = function (note, seconds) {
        if (note >= 44 && note <= 123) {
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text = text + "\nhub.speaker.beep(".concat(note, ", ").concat(seconds, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: note is not within the allowed range of 44-123.");
        }
    };
    /**
     *
     * @param {Number} [note=60] - The MIDI note number.
     * @description Starts playing a beep. The beep will play indefinitely until stop() or another beep method is called.
     */
    Speaker.prototype.start_beep = function (note) {
        if (note >= 44 && note <= 123) {
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text = text + "\nhub.speaker.start_beep(".concat(note, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: note is not within the allowed range of 44-123");
        }
    };
    /**
     * @description Stops any sound that is playing.
     */
    Speaker.prototype.stop = function () {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nhub.speaker.stop()";
            }
            else {
                console.log(err);
            }
        });
    };
    /**
     *
     * @param {Number} [volume=100%] - The new volume percentage.
     * @description Sets the speaker volume. If the assigned volume is out of range, the nearest volume (i.e., 0 or 100) will be used instead. This only sets the volume of the Hub, not the programming app.
     */
    Speaker.prototype.set_volume = function (volume) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nhub.speaker.set_volume(".concat(volume, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    return Speaker;
}(Spiky));
exports.Speaker = Speaker;
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Light Matrix.
 */
var LightMatrix = /** @class */ (function (_super) {
    __extends(LightMatrix, _super);
    function LightMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description Shows an image on the Light Matrix.
     * @param {String} image - Name of the image.
     * @param {Number} [brightness=100] - Brightness of the image from 0-100
     */
    LightMatrix.prototype.show_image = function (image, brightness) {
        var images = [
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
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text =
                        text +
                            "\nhub.light_matrix.show_image(".concat(String(image), ", brightness = ").concat(brightness, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: image is not one of the allowed values.");
        }
    };
    /**
     * @description Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @param {Number} x - Pixel position, counting from the left.
     * @param {Number} y - Pixel position, counting from the top.
     * @param {Number} [brightness=100] - Brightness of the pixel
     */
    LightMatrix.prototype.set_pixel = function (x, y, brightness) {
        if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text =
                        text +
                            "\nhub.light_matrix.set_pixel(".concat(x, ", ").concat(y, ", brightness = ").concat(brightness, ")");
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            return new Error("ValueError: x, y is not within the allowed range of 0-4.");
        }
    };
    /**
     *
     * @param {String} text - Text to write.
     * @description Displays text on the Light Matrix, one letter at a time, scrolling from right to left. Your program will not continue until all of the letters have been shown.
     */
    LightMatrix.prototype.write = function (text) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text_1 = String(data);
                text_1 = text_1 + "\nhub.light_matrix.write(".concat(String(text_1), ")");
            }
            else {
                console.log(err);
            }
        });
    };
    /**
     * @description Turns off all of the pixels on the Light Matrix.
     */
    LightMatrix.prototype.off = function () {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nhub.light_matrix.off()";
            }
            else {
                console.log(err);
            }
        });
    };
    return LightMatrix;
}(Spiky));
exports.LightMatrix = LightMatrix;
/**
 * @extends Spiky
 * @description The math module provides some basic mathematical functions for working with floating-point numbers.
 */
var MathematicalFunctions = /** @class */ (function (_super) {
    __extends(MathematicalFunctions, _super);
    function MathematicalFunctions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns Returns the inverse cosine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.acos = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nacos(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.acos(x);
    };
    /**
     * @returns Returns the inverse hyperbolic cosine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.acosh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nacosh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.acosh(x);
    };
    /**
     * @returns Returns the inverse sine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.asin = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nasin(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.asin(x);
    };
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.asinh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nasinh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.asinh(x);
    };
    /**
     *
     * @returns Returns the inverse tangent of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.atan = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\natan(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.atan(x);
    };
    /**
     * @returns Returns the principal value of the inverse tangent of "y/x."
     * @param {Number} x
     * @param {Number} y
     */
    MathematicalFunctions.prototype.atan2 = function (y, x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\natan2(".concat(y, ", ").concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.atan2(y, x);
    };
    /**
     * @returns Returns the inverse hyperbolic tangent of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.atanh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\natanh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.atanh(x);
    };
    /**
     * @returns Returns an integer ("x" rounded toward positive infinity).
     * @param {Number} x
     */
    MathematicalFunctions.prototype.ceil = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nceil(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.ceil(x);
    };
    /**
     * @returns Returns "x" with the sign of "y."
     * @param {Number} x
     * @param {Number} y
     */
    MathematicalFunctions.prototype.copysign = function (x, y) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ncopysign(".concat(x, ", ").concat(y, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    /**
     * @returns Returns the cosine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.cos = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ncos(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.cos(x);
    };
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.cosh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ncosh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.cosh(x);
    };
    /**
     * @returns Returns radians ‘x’ converted to degrees.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.degrees = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ndegrees(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return (x * 180) / Math.PI;
    };
    /**
     * @returns Returns the error function of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.erf = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nerf(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        // Constants
        var a1 = 0.254829592;
        var a2 = -0.284496736;
        var a3 = 1.421413741;
        var a4 = -1.453152027;
        var a5 = 1.061405429;
        var p = 0.3275911;
        // Sign of x
        var sign = x >= 0 ? 1 : -1;
        // Absolute value of x
        var absX = Math.abs(x);
        // Calculate t
        var t = 1.0 / (1.0 + p * absX);
        // Approximation using the approximation formula
        var erfApproximation = sign *
            (1 -
                ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
                    t *
                    Math.exp(-absX * absX));
        return erfApproximation;
    };
    /**
     * @returns Returns the complementary error function of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.erfc = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nerfc(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        // Constants
        var a1 = 0.254829592;
        var a2 = -0.284496736;
        var a3 = 1.421413741;
        var a4 = -1.453152027;
        var a5 = 1.061405429;
        var p = 0.3275911;
        // Absolute value of x
        var absX = Math.abs(x);
        // Calculate t
        var t = 1.0 / (1.0 + p * absX);
        // Approximation using the approximation formula
        var erfcApproximation = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
            t *
            Math.exp(-absX * absX);
        // Complementary value
        var erfcValue = 1 - erfcApproximation;
        return erfcValue;
    };
    /**
     * @returns Returns the exponential of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.exp = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nexp(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.exp(x);
    };
    /**
     * @returns Returns exp(x) - 1.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.expm1 = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nexpm1(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.expm1(x);
    };
    /**
     * @returns Returns the absolute value of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.fabs = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nfabs(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.abs(x);
    };
    /**
     * @returns Returns an integer ("x" rounded toward negative infinity).
     * @param {Number} x
     */
    MathematicalFunctions.prototype.floor = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nfloor(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.floor(x);
    };
    /**
     * @returns Returns the remainder of "x/y."
     * @param {Number} x
     * @param {Number} y
     */
    MathematicalFunctions.prototype.fmod = function (x, y) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nfmod(".concat(x, ", ").concat(y, ")");
            }
            else {
                console.log(err);
            }
        });
        var remainder = x % y;
        return remainder;
    };
    /**
     * @returns Decomposes a floating-point number into its mantissa and exponent. The Returned value is the tuple (m, e) such that x == m * 2**e exactly. If x == 0, the function Returns (0.0, 0). Otherwise, the relation 0.5 <= abs(m) < 1 holds.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.frexp = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nfrexp(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        if (x === 0) {
            return [0.0, 0];
        }
        var sign = Math.sign(x);
        var absX = Math.abs(x);
        var exponent = Math.floor(Math.log2(absX));
        var mantissa = absX / Math.pow(2, exponent);
        return [sign * mantissa, exponent];
    };
    /**
     * @returns Returns the gamma function of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.gamma = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ngamma(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        // Coefficients for the Lanczos approximation
        function gamma(x) {
            // Coefficients for the Lanczos approximation
            var lanczosCoefficients = [
                0.99999999999980993, 676.5203681218851, -1259.1392167224028,
                771.32342877765313, -176.61502916214059, 12.507343278686905,
                -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
            ];
            if (x <= 0) {
                // Use the reflection formula for negative values and non-integers
                return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
            }
            // Implementation of the Lanczos approximation
            var g = 7;
            var a = lanczosCoefficients[0];
            for (var i = 1; i < lanczosCoefficients.length; i++) {
                a += lanczosCoefficients[i] / (x + i);
            }
            return (Math.sqrt(2 * Math.PI) *
                Math.pow(x + g + 0.5, x + 0.5) *
                Math.exp(-(x + g + 0.5)) *
                a);
        }
        return gamma(x);
    };
    /**
     * @returns Returns "true" if "x" is finite.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.isfinite = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nisfinite(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return isFinite(x);
    };
    /**
     * @returns Returns "true" if "x" is infinite.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.isinf = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nisinf(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return !isFinite(x);
    };
    /**
     * @returns Returns "true" if "x" is not-a-number
     * @param {Number} x
     */
    MathematicalFunctions.prototype.isnan = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nisnan(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return isNaN(x);
    };
    /**
     * @returns Returns x * (2**exp).
     * @param {Number} x
     * @param {Number} exp
     */
    MathematicalFunctions.prototype.ldexp = function (x, exp) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nldexp(".concat(x, ", ").concat(exp, ")");
            }
            else {
                console.log(err);
            }
        });
        return x * Math.pow(2, exp);
    };
    /**
     * @returns Returns the natural logarithm of the gamma function of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.lgamma = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nlgamme(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        function gamma(x) {
            // Coefficients for the Lanczos approximation
            var lanczosCoefficients = [
                0.99999999999980993, 676.5203681218851, -1259.1392167224028,
                771.32342877765313, -176.61502916214059, 12.507343278686905,
                -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
            ];
            if (x <= 0) {
                // Use the reflection formula for negative values and non-integers
                return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
            }
            // Implementation of the Lanczos approximation
            var g = 7;
            var a = lanczosCoefficients[0];
            for (var i = 1; i < lanczosCoefficients.length; i++) {
                a += lanczosCoefficients[i] / (x + i);
            }
            return (Math.sqrt(2 * Math.PI) *
                Math.pow(x + g + 0.5, x + 0.5) *
                Math.exp(-(x + g + 0.5)) *
                a);
        }
        return Math.log(gamma(x));
    };
    /**
     * @returns Returns the natural logarithm of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.log = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nlog(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.log(x);
    };
    /**
     * @returns Returns the base-10 logarithm of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.log10 = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nlog10(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.log10(x);
    };
    /**
     * @returns Returns the base-2 logarithm of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.log2 = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nlog2(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.log2(x);
    };
    /**
     * @returns Returns a tuple of two floats (the fractional and integral parts of "x"). Both Returned values have the same sign as "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.modf = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nmodf(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        var integralPart = Math.floor(x);
        var fractionalPart = x - integralPart;
        return [fractionalPart, integralPart];
    };
    /**
     * @returns Returns "x" to the power of "y."
     * @param {Number} x
     * @param {Number} y
     */
    MathematicalFunctions.prototype.pow = function (x, y) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\npow(".concat(x, ", ").concat(y, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.pow(x, y);
    };
    /**
     * @returns Returns "degrees x" converted to radians.
     * @param {Number} x
     */
    MathematicalFunctions.prototype.radians = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nradians(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        var radians = x * (Math.PI / 180);
        return radians;
    };
    /**
     * @returns Returns the sine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.sin = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nsin(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.sin(x);
    };
    /**
     * @returns Returns the hyperbolic sine of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.sinh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nsinh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.sinh(x);
    };
    /**
     * @returns Returns the square root of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.sqrt = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nsqrt(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.sqrt(x);
    };
    /**
     * @returns Returns the tangent of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.tan = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ntan(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.tan(x);
    };
    /**
     * @returns Returns the hyperbolic tangent of "x."
     * @param {Number} x
     */
    MathematicalFunctions.prototype.tanh = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ntanh(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
        return Math.tanh(x);
    };
    /**
     * @returns Returns an integer ("x" rounded toward "0").
     * @param {Number} x
     */
    MathematicalFunctions.prototype.trunc = function (x) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\ntrunc(".concat(x, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    return MathematicalFunctions;
}(Spiky));
exports.MathematicalFunctions = MathematicalFunctions;
/**
 * @extends Spiky
 * @description To use the Color Sensor, you must first initialize it.
 */
var ColorSensor = /** @class */ (function (_super) {
    __extends(ColorSensor, _super);
    /**
     *
     * @param {String} name
     * @param {String} port
     */
    function ColorSensor(name, port) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        fs.readFile(_this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text =
                    text + "\n".concat(_this.name, " = ColorSensor(").concat(String(port).toUpperCase(), ")");
            }
            else {
                console.log(err);
            }
        });
        return _this;
    }
    /**
     * @description Lights up all of the lights on the Color Sensor at the specified brightness. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} [brightness=100%] - The desired brightness of the lights on the Color Sensor.
     */
    ColorSensor.prototype.light_up_all = function (brightness) {
        var _this = this;
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\n".concat(_this.name, ".light_up_all(").concat(brightness, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    /**
     * @description Sets the brightness of the individual lights on the Color Sensor. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} light_1 - The desired brightness of light 1.
     * @param {Number} light_2 - The desired brightness of light 2.
     * @param {Number} light_3 - The desired brightness of light 3.
     */
    ColorSensor.prototype.light_up = function (light_1, light_2, light_3) {
        var _this = this;
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text =
                    text + "\n".concat(_this.name, ".light_up(").concat(light_1, ", ").concat(light_2, ", ").concat(light_3, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    return ColorSensor;
}(Spiky));
exports.ColorSensor = ColorSensor;
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
var Wait = /** @class */ (function (_super) {
    __extends(Wait, _super);
    function Wait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {Number} time - Wait for x seconds
     */
    Wait.prototype.wait_for_seconds = function (time) {
        fs.readFile(this.filename, function (err, data) {
            if (!err) {
                var text = String(data);
                text = text + "\nwait_for_seconds(".concat(time, ")");
            }
            else {
                console.log(err);
            }
        });
    };
    return Wait;
}(Spiky));
exports.Wait = Wait;
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {String} code - Write custom python code to fullfil your dreams!
     */
    Code.prototype.custom = function (code) {
        if (code != "") {
            fs.readFile(this.filename, function (err, data) {
                if (!err) {
                    var text = String(data);
                    text = text + "".concat(code);
                }
                else {
                    console.log(err);
                }
            });
        }
        else {
            new Error("ValueError: code is not defined!");
        }
    };
    Code.prototype.if = function () { };
    return Code;
}(Spiky));
exports.Code = Code;
exports.default = Spiky;
