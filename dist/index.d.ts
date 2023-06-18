interface whileConditions {
    first: Number | String | MotorPair;
    condition: String;
    second: Number | String | MotorPair | StatusLight | Math;
}
interface ifConditions {
    first: Number | String | number[] | Object | string[] | Boolean | MotorPair | LightMatrix | Timer | StatusLight;
    condition: String;
    second: Number | String | number[] | Object | string[] | Boolean;
}
type StatusLightState = true | false;
type MotorMovingState = true | false;
type ButtonPressed = true | false;
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
 * @description To use the app, you must first initialize it.
 */
declare class App extends Spiky {
    /**
     *
     * @param {String} name - The name of the app variable
     */
    constructor(name: string);
    /**
     * @description Plays a sound from the device (i.e., tablet or computer). The program will not continue until the sound has finished playing. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The sound name of the sound that should be played!
     * @param {Number} [volume=100%] - The sound volume (0%-100%)
     */
    play_sound(sound: string, volume: number): Error;
    /**
     * @description Starts playing a sound from your device (i.e., tablet or computer). The program will not wait for the sound to finish playing before proceeding to the next command. If a sound with the specified name isn’t found, nothing will happen.
     * @param {String} sound - The name of the sound to play.
     * @param {Number} [volume=100%] - The volume at which the sound will be played
     */
    start_sound(sound: string, volume: number): Error;
}
declare class Buttons extends Spiky {
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
    move(amount: number, unit: string, steering: number, speed: number): Error;
}
/**
 * @extends Spiky
 */
declare class Timer extends Spiky {
    /**
     *
     * @param {String} name - Name of the variable which sets the timer
     */
    constructor(name: string);
    reset(): void;
}
/**
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Hub’s programmable Brick Status Light.
 */
declare class StatusLight extends Spiky {
    /**
     *
     * @param {String} color -  The color which the status light should display
     */
    on(color: string): void;
    off(): void;
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
    beep(note: number, seconds: number): Error;
    /**
     *
     * @param {Number} [note=60] - The MIDI note number.
     * @description Starts playing a beep. The beep will play indefinitely until stop() or another beep method is called.
     */
    start_beep(note: number): Error;
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
 * @extends Spiky
 * @description Following are all of the functions that are linked to the Light Matrix.
 */
declare class LightMatrix extends Spiky {
    /**
     * @description Shows an image on the Light Matrix.
     * @param {String} image - Name of the image.
     * @param {Number} [brightness=100] - Brightness of the image from 0-100
     */
    show_image(image: string, brightness: number): Error;
    /**
     * @description Sets the brightness of one pixel (one of the 25 LEDs) on the Light Matrix.
     * @param {Number} x - Pixel position, counting from the left.
     * @param {Number} y - Pixel position, counting from the top.
     * @param {Number} [brightness=100] - Brightness of the pixel
     */
    set_pixel(x: number, y: number, brightness: string): Error;
    /**
     *
     * @param {String} text - Text to write.
     * @description Displays text on the Light Matrix, one letter at a time, scrolling from right to left. Your program will not continue until all of the letters have been shown.
     */
    write(text: string): void;
    /**
     * @description Turns off all of the pixels on the Light Matrix.
     */
    off(): void;
}
/**
 * @extends Spiky
 * @description The math module provides some basic mathematical functions for working with floating-point numbers.
 */
declare class MathematicalFunctions extends Spiky {
    /**
     * @returns Returns the inverse cosine of "x."
     * @param {Number} x
     */
    acos(x: number): number;
    /**
     * @returns Returns the inverse hyperbolic cosine of "x."
     * @param {Number} x
     */
    acosh(x: number): number;
    /**
     * @returns Returns the inverse sine of "x."
     * @param {Number} x
     */
    asin(x: number): number;
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    asinh(x: number): number;
    /**
     *
     * @returns Returns the inverse tangent of "x."
     * @param {Number} x
     */
    atan(x: number): number;
    /**
     * @returns Returns the principal value of the inverse tangent of "y/x."
     * @param {Number} x
     * @param {Number} y
     */
    atan2(y: number, x: number): number;
    /**
     * @returns Returns the inverse hyperbolic tangent of "x."
     * @param {Number} x
     */
    atanh(x: number): number;
    /**
     * @returns Returns an integer ("x" rounded toward positive infinity).
     * @param {Number} x
     */
    ceil(x: number): number;
    /**
     * @returns Returns "x" with the sign of "y."
     * @param {Number} x
     * @param {Number} y
     */
    copysign(x: number, y: number): void;
    /**
     * @returns Returns the cosine of "x."
     * @param {Number} x
     */
    cos(x: number): number;
    /**
     * @returns Returns the inverse hyperbolic sine of "x."
     * @param {Number} x
     */
    cosh(x: number): number;
    /**
     * @returns Returns radians ‘x’ converted to degrees.
     * @param {Number} x
     */
    degrees(x: number): number;
    /**
     * @returns Returns the error function of "x."
     * @param {Number} x
     */
    erf(x: number): number;
    /**
     * @returns Returns the complementary error function of "x."
     * @param {Number} x
     */
    erfc(x: number): number;
    /**
     * @returns Returns the exponential of "x."
     * @param {Number} x
     */
    exp(x: number): number;
    /**
     * @returns Returns exp(x) - 1.
     * @param {Number} x
     */
    expm1(x: number): number;
    /**
     * @returns Returns the absolute value of "x."
     * @param {Number} x
     */
    fabs(x: number): number;
    /**
     * @returns Returns an integer ("x" rounded toward negative infinity).
     * @param {Number} x
     */
    floor(x: number): number;
    /**
     * @returns Returns the remainder of "x/y."
     * @param {Number} x
     * @param {Number} y
     */
    fmod(x: number, y: number): number;
    /**
     * @returns Decomposes a floating-point number into its mantissa and exponent. The Returned value is the tuple (m, e) such that x == m * 2**e exactly. If x == 0, the function Returns (0.0, 0). Otherwise, the relation 0.5 <= abs(m) < 1 holds.
     * @param {Number} x
     */
    frexp(x: number): number[];
    /**
     * @returns Returns the gamma function of "x."
     * @param {Number} x
     */
    gamma(x: number): any;
    /**
     * @returns Returns "true" if "x" is finite.
     * @param {Number} x
     */
    isfinite(x: number): boolean;
    /**
     * @returns Returns "true" if "x" is infinite.
     * @param {Number} x
     */
    isinf(x: number): boolean;
    /**
     * @returns Returns "true" if "x" is not-a-number
     * @param {Number} x
     */
    isnan(x: number): boolean;
    /**
     * @returns Returns x * (2**exp).
     * @param {Number} x
     * @param {Number} exp
     */
    ldexp(x: number, exp: number): number;
    /**
     * @returns Returns the natural logarithm of the gamma function of "x."
     * @param {Number} x
     */
    lgamma(x: number): number;
    /**
     * @returns Returns the natural logarithm of "x."
     * @param {Number} x
     */
    log(x: number): number;
    /**
     * @returns Returns the base-10 logarithm of "x."
     * @param {Number} x
     */
    log10(x: number): number;
    /**
     * @returns Returns the base-2 logarithm of "x."
     * @param {Number} x
     */
    log2(x: number): number;
    /**
     * @returns Returns a tuple of two floats (the fractional and integral parts of "x"). Both Returned values have the same sign as "x."
     * @param {Number} x
     */
    modf(x: number): number[];
    /**
     * @returns Returns "x" to the power of "y."
     * @param {Number} x
     * @param {Number} y
     */
    pow(x: number, y: number): number;
    /**
     * @returns Returns "degrees x" converted to radians.
     * @param {Number} x
     */
    radians(x: number): number;
    /**
     * @returns Returns the sine of "x."
     * @param {Number} x
     */
    sin(x: number): number;
    /**
     * @returns Returns the hyperbolic sine of "x."
     * @param {Number} x
     */
    sinh(x: number): number;
    /**
     * @returns Returns the square root of "x."
     * @param {Number} x
     */
    sqrt(x: number): number;
    /**
     * @returns Returns the tangent of "x."
     * @param {Number} x
     */
    tan(x: number): number;
    /**
     * @returns Returns the hyperbolic tangent of "x."
     * @param {Number} x
     */
    tanh(x: number): number;
    /**
     * @returns Returns an integer ("x" rounded toward "0").
     * @param {Number} x
     */
    trunc(x: number): void;
}
/**
 * @extends Spiky
 * @description To use the Color Sensor, you must first initialize it.
 */
declare class ColorSensor extends Spiky {
    /**
     *
     * @param {String} name
     * @param {String} port
     */
    constructor(name: string, port: string);
    /**
     * @description Lights up all of the lights on the Color Sensor at the specified brightness. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} [brightness=100%] - The desired brightness of the lights on the Color Sensor.
     */
    light_up_all(brightness: number): void;
    /**
     * @description Sets the brightness of the individual lights on the Color Sensor. This causes the Color Sensor to change modes, which can affect your program in unexpected ways. For example, the Color Sensor can't read colors when it's in light up mode.
     * @param {Number} light_1 - The desired brightness of light 1.
     * @param {Number} light_2 - The desired brightness of light 2.
     * @param {Number} light_3 - The desired brightness of light 3.
     */
    light_up(light_1: number, light_2: number, light_3: number): void;
}
/**
 * @description Waits for a specified number of seconds before continuing the program.
 * @param {Number} seconds The time to wait, specified in seconds.
 */
declare function wait_for_seconds(seconds: number): void;
declare function wait_until(): void;
declare class Wait extends Spiky {
    /**
     *
     * @param {Number} time - Wait for x seconds
     */
    wait_for_seconds(time: number): void;
}
declare class Code extends Spiky {
    /**
     *
     * @param {String} code - Write custom python code to fullfil your dreams!
     */
    custom(code: string): void;
    if(): void;
}
export default Spiky;
export { App, ColorSensor, Wait, Code, Speaker, Buttons, ButtonPressed, ifConditions, whileConditions, StatusLightState, MotorMovingState, MotorPair, wait_for_seconds, wait_until, MathematicalFunctions, LightMatrix, };
