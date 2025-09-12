"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorPair = void 0;
/**
 * The motor_pair module is used to run motors in a synchronized fashion. This mode is optimal for creating drivebases where you'd want a pair of motors to start and stop at the same time.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair
 */
var MotorPair = /** @class */ (function () {
    function MotorPair() {
    }
    /**
     * Move a Motor Pair at a constant speed until a new command is given.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move
     * @param pair The pair slot of the Motor Pair.
     * @param steering The steering (-100 to 100)
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    MotorPair.move = function (pair, steering, velocity, acceleration) {
        if (velocity === void 0) { velocity = 360; }
        if (acceleration === void 0) { acceleration = 1000; }
    };
    /**
     * Move a Motor Pair at a constant speed for a specific number of degrees.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_for_degrees
     * @param pair The pair slot of the Motor Pair.
     * @param degrees The number of degrees
     * @param steering The steering (-100 to 100)
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     */
    MotorPair.moveForDegrees = function (pair, degrees, steering, velocity, stop, acceleration, deceleration) {
        if (velocity === void 0) { velocity = 360; }
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Move a Motor Pair at a constant speed for a specific duration.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_for_time
     * @param pair The pair slot of the Motor Pair.
     * @param duration
     * @param steering
     * @param velocity
     * @param stop
     * @param acceleration
     * @param deceleration
     */
    MotorPair.moveForTime = function (pair, duration, steering, velocity, stop, acceleration, deceleration) {
        if (velocity === void 0) { velocity = 360; }
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Perform a tank move on a Motor Pair at a constant speed until a new command is given.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank
     * @param pair The pair slot of the Motor Pair.
     * @param leftVelocity The velocity (deg/sec) of the left motor.
     * @param rightVelocity The velocity (deg/sec) of the right motor.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    MotorPair.moveTank = function (pair, leftVelocity, rightVelocity, acceleration) {
        if (acceleration === void 0) { acceleration = 1000; }
    };
    /**
     * Perform a tank move on a Motor Pair at a constant speed until a new command is given.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank_for_degrees
     * @param pair The pair slot of the Motor Pair.
     * @param degrees The number of degrees
     * @param leftVelocity The velocity (deg/sec) of the left motor.
     * @param rightVelocity The velocity (deg/sec) of the right motor.
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     */
    MotorPair.moveTankForDegrees = function (pair, degrees, leftVelocity, rightVelocity, stop, acceleration, deceleration) {
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Perform a tank move on a Motor Pair at a constant speed for a specific amount of time.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank_for_time
     * @param pair The pair slot of the Motor Pair.
     * @param duration The duration in milliseconds
     * @param leftVelocity The velocity (deg/sec) of the left motor.
     * @param rightVelocity The velocity (deg/sec) of the right motor.
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     */
    MotorPair.moveTankForTime = function (pair, duration, leftVelocity, rightVelocity, stop, acceleration, deceleration) {
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * pair two motors (left_motor & right_motor) and store the paired motors in pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-pair
     * @param pair The pair slot of the Motor Pair.
     * @param rightMotor The port of the right motor. Use the port submodule in the hub module.
     * @param leftMotor The port of the left motor. Use the port submodule in the hub module.
     */
    MotorPair.pair = function (pair, leftMotor, rightMotor) { };
    /**
     * Stops a Motor Pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-stop
     * @param pair The pair slot of the Motor Pair.
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     */
    MotorPair.stop = function (pair, stop) {
        if (stop === void 0) { stop = 1; }
    };
    /**
     * Unpair a Motor Pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-unpair
     * @param pair The pair slot of the Motor Pair.
     */
    MotorPair.unpair = function (pair) { };
    MotorPair.PAIR_1 = 0;
    MotorPair.PAIR_2 = 1;
    MotorPair.PAIR_3 = 2;
    return MotorPair;
}());
exports.MotorPair = MotorPair;
