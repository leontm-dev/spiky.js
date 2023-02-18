const fs = require("fs");
class spiky {
    /**
     * 
     * @param {String} filename 
     * @returns Returns the created file with correct ending as a string
     */
    constructor (filename) {
        this.filename = `${filename}.llps`;
        fs.readFile("signatur.txt", (err, data) => {
            fs.writeFileSync(`${String(this.filename)}`, String('"""\n' + data + "\n\nFile converted by spiky.js made by LeonTM" + '\n"""'));
        })
    };
    /**
     * @returns Returns the current file
     */
    filename = this.filename
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
    move(motors, amount, unit, steering, speed) {
        if (motors.motor1 != undefined && motors.motor2 != undefined) {
            if (typeof amount === Number) {
                if (unit === "cm" || unit === "rotations" || unit === "in" || unit === "degrees" || unit === "seconds") {
                    if (steering == undefined) {
                        steering = 0;
                    };
                    if (speed == undefined) {
                        speed = 0;
                    };
                    fs.readFile(this.filename, (err, data) => {
                        if (!err) {
                            let text = String(data);
                            let motor1 = motors.motor1;
                            let motor2 = motors.motor2;
                            text = text + `\nMotorPair(${motor1}, ${motor2})`
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
        } else {
            return new Error("RuntimeError: One or both of the motors has been disconnected or the motors could not be paired or they are not found")
        }
    }
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
};
module.exports = spiky;