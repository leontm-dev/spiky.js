declare class Spiky {
    /**
     *
     * @param {String} filename
     * @returns Returns the created file with correct ending as a string
     */
    filename: string;
    name: string;
    constructor(filename: string);
    /**
     * @returns Returns the current file
     */
    compile(): void;
}
/**
 * @extends Spiky
 * @description MotorPair objects are used to control 2 motors simultaneously in opposite directions. To be able to use MotorPair, you must initialize both motors.
 */
declare class MotorPair extends Spiky {
    /**
     *
     * @param {String} name - The name of the MotorPair
     * @param {String} motor1 - The port name of the first motor
     * @param {String} motor2 - The port name of the second motor
     */
    constructor(name: string, motor1: string, motor2: string);
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
    move(amount: number, unit: string, steering: number, speed: number): Error | undefined;
}
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to sounds coming out of the Hub.
 */
declare class Speaker extends Spiky {
    /**
     *
     * @param {Number} [note=60]- The MIDI note number.
     * @param {Number} [seconds=0.2] - The duration of the beep, specified in seconds.
     * @description Plays a beep on the Hub. Your program will not continue until seconds have passed.
     */
    beep(note: number, seconds: number): Error | undefined;
    /**
     *
     * @param {Number} [note=60] - The MIDI note number.
     * @description Starts playing a beep. The beep will play indefinitely until stop() or another beep method is called.
     */
    start_beep(note: number): Error | undefined;
    /**
     * @description Stops any sound that is playing.
     */
    stop(): void;
    /**
     *
     * @param {Number} [volume=100%] - The new volume percentage.
     * @description Sets the speaker volume. If the assigned volume is out of range, the nearest volume (i.e., 0 or 100) will be used instead. This only sets the volume of the Hub, not the programming app.
     */
    set_volume(volume: number): void;
}
/**
 * @description Waits for a specified number of seconds before continuing the program.
 * @param {Number} seconds The time to wait, specified in seconds.
 */
declare function wait_for_seconds(seconds: number): void;
declare function wait_until(): void;
declare class Code extends Spiky {
    /**
     *
     * @param {String} code - Write custom python code to fullfil your dreams!
     */
    custom(code: string): void;
}
export default Spiky;
export { Speaker, Code, MotorPair, wait_for_seconds, wait_until };
