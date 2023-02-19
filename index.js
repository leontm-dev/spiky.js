const fs = require("fs");
class Spiky {
    /**
     * 
     * @param {String} filename 
     * @returns Returns the created file with correct ending as a string
     */
    constructor (filename) {
        this.filename = `${filename}.llps`;
        fs.readFile("signatur.txt", (err, data) => {
            fs.writeFileSync(`${String(this.filename)}`, String('"""\n' + data + "\n\nFile converted by spiky.js made by LeonTM" + '\n"""\n\nfrom spike import PrimeHub, LightMatrix, Button, StatusLight, ForceSensor, MotionSensor, Speaker, ColorSensor, App, DistanceSensor, Motor, MotorPair\nfrom spike.control import wait_for_seconds, wait_until, Timer\nfrom math import *'));
        })
    };
    /**
     * @returns Returns the current file
     */
    filename = this.filename
    /**
     *
     * @param {String} value
     */
    print(value) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = String(text + `\nprint(${value})`);
                fs.writeFile(this.filename, text, (err) => {
                    if (!err) {
                        return true;
                    } else {
                        return false;
                    }
                })
            } else {
                console.log(err);
            }
        })
    };
    /**
    *
    * @param {Number} time - Wait for x seconds
    */
    wait(time) {
        if (typeof time === Number) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `\nwait_for_seconds(${time})`
                } else {
                    console.log(err);
                }
            })
        } else {
            return new Error("TypeError: time must be a number!")
        }
    }
};
class MotorPair extends Spiky {
    /**
     *
     * @param {String} name - The name of the MotorPair
     * @param {String} motor1 - The port name of the first motor
     * @param {String} motor2 - The port name of the second motor
     */
    constructor(name, motor1, motor2) {
        this.name = name;
        if (motor1 != undefined && motor2 != undefined) {
            this.motor1 = motor1;
            this.motor2 = motor2;
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `\n${this.name} = MotorPair(${String(this.motor1)}, ${String(this.motor2)})`;
                } else {
                    console.log(err);
                }
            })
        }
    };
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
        if (typeof amount === Number) {
            if (unit === "cm" || unit === "rotations" || unit === "in" || unit === "degrees" || unit === "seconds") {
                if (steering == undefined) {
                    steering = 0;
                };
                if (speed == undefined) {
                    speed = 50;
                };
                fs.readFile(this.filename, (err, data) => {
                    if (!err) {
                        let text = String(data);
                        text = text + `\n${this.name}.move(${amount}, ${unit}, ${steering}, ${speed})`
                    } else {
                        console.log(err);
                    }
                })
            } else {
                return new Error("ValueError: unit is not one of the allowed values.")
            }
        } else {
            return new Error("TypeError: amount is not a number, or steering or speed is not an integer, or unit is not a string.")
        }
    }
}
class Timer extends Spiky {
    /**
     * 
     * @param {String} name - Name of the variable which sets the timer
     */
    constructor(name) {
        this.name = name
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${this.name} = Timer()`;
            } else {
                console.log(err);
            }
        })
    };
    reset() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n${this.name}.reset()`
            } else {
                console.log(err);
            }
        })
    };
}
class StatusLight extends Spiky {
    constructor();
    /**
     *
     * @param {String} color -  The color which the status light should display
     */
    on(color) {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\nhub.status_light.on(${String(color.toLowerCase())})`
            } else {
                console.log(err);
            }
        })
    };
    off() {
        fs.readFile(this.filename, (err, data) => {
            if (!err) {
                let text = String(data);
                text = text + `\n$hub.status_light.off()`
            } else {
                console.log(err);
            }
        });
    };
};
class Speaker extends Spiky {
    constructor();
    /**
     *
     * @param {Number} [note=60]- The MIDI note number.
     * @param {Number} [seconds=0.2] - The duration of the beep, specified in seconds.
     * @description Plays a beep on the Hub. Your program will not continue until seconds have passed.
     */
    beep(note, seconds) {
        if (typeof note === Number && typeof seconds === Number) {
            if (note >= 44 && note <= 123) {
                fs.readFile(this.filename, (err, data) => {
                    if (!err) {
                        let text = String(data);
                        text = text + `\nhub.speaker.beep(${note}, ${seconds})`;
                    } else {
                        console.log(err);
                    }
                })
            } else {
                return new Error("ValueError: note is not within the allowed range of 44-123.")
            }
        } else {
            return new Error("TypeError: note is not a number or seconds is not a number.")
        }
    }
    /**
     * 
     * @param {Number} [note=60] - The MIDI note number.
     * @description Starts playing a beep. The beep will play indefinitely until stop() or another beep method is called.
     */
    start_beep(note) {
        if (typeof note === Number) {
            if (note >= 44 && note <= 123) {
                fs.readFile(this.filename, (err, data) => {
                    if (!err) {
                        let text = String(data);
                        text = text + `\nhub.speaker.start_beep(${note})`;
                    } else {
                        console.log(err);
                    }
                })
            } else {
                return new Error("ValueError: note is not within the allowed range of 44-123");
            }
        } else {
            return new Error("TypeError: note is not a number.");
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
            } else {
                console.log(err);
            }
        })
    }
    /**
     * 
     * @param {Number} [volume=100%] - The new volume percentage.
     * @description Sets the speaker volume. If the assigned volume is out of range, the nearest volume (i.e., 0 or 100) will be used instead. This only sets the volume of the Hub, not the programming app.
     */
    set_volume(volume) {
        if (typeof volume === Number) {
            fs.readFile(this.filename, (err, data) => {
                if (!err) {
                    let text = String(data);
                    text = text + `\nhub.speaker.set_volume(${volume})`;
                } else {
                    console.log(err);
                }
            })
        } else {
            return new Error("TypeError: volume is not a number.");
        }
    }
};
module.exports = {Spiky, MotorPair, Timer, StatusLight,  Speaker};