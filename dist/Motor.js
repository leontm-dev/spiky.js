"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor
 */
var Motor = /** @class */ (function () {
    function Motor() {
        this.READY = 0;
        this.RUNNING = 1;
        this.STALLED = 2;
        this.CANCELLED = 3;
        this.ERROR = 4;
        this.DISCONNECTED = 5;
        this.COAST = 0;
        this.BRAKE = 1;
        this.HOLD = 2;
        this.CONTINUE = 3;
        this.SMART_COAST = 4;
        this.SMART_BRAKE = 5;
        this.CLOCKWISE = 0;
        this.COUNTERCLOCKWISE = 1;
        this.SHORTEST_PATH = 2;
        this.LONGEST_PATH = 3;
    }
    /**
     * Get the absolute position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-absolute_position
     * @param port A port from the port submodule in the hub module
     */
    Motor.absolutePosition = function (port) {
        return 0;
    };
    /**
     * Get the pwm of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    Motor.getDutyCycle = function (port) {
        return 0;
    };
    /**
     * Get the relative position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-relative_position
     * @param port A port from the port submodule in the hub module
     */
    Motor.relativePosition = function (port) {
        return 0;
    };
    /**
     * Change the position used as the offset when using the run_to_relative_position function.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-reset_relative_position
     * @param port A port from the port submodule in the hub module
     * @param position The degree of the motor
     */
    Motor.resetRelativePosition = function (port, position) { };
    /**
     * Start a Motor at a constant speed
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run
     * @param port A port from the port submodule in the hub module
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    Motor.run = function (port, velocity, acceleration) {
        if (acceleration === void 0) { acceleration = 1000; }
    };
    /**
     * Turn a motor for a specific number of degrees
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run_for_degrees
     * @param port A port from the port submodule in the hub module
     * @param degrees The number of degrees
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1050 to 1050
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     */
    Motor.runForDegrees = function (port, degrees, velocity, stop, acceleration, deceleration) {
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Run a Motor for a limited amount of time
  When awaited returns a status of the movement that corresponds to one of the following constants:
  
  motor.READY
  motor.RUNNING
  motor.STALLED
  motor.ERROR
  motor.DISCONNECTED
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run_for_time
     * @param port A port from the port submodule in the hub module
     * @param duration The duration in milliseconds
     * @param velocity The velocity in degrees/sec
  
  Value ranges depends on motor type.
  
  Small motor (essential): -660 to 660,
  Medium motor: -1110 to 1110,
  Large motor: -1050 to 1050
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
  
  Possible values are
  motor.COAST to make the motor coast until a stop.
  motor.BRAKE to brake and continue to brake after stop.
  motor.HOLD to tell the motor to hold it's position.
  motor.CONTINUE to tell the motor to keep running at whatever velocity it's running at until it gets another command.
  motor.SMART_COAST to make the motor brake until stop and then coast and compensate for inaccuracies in the next command.
  motor.SMART_BRAKE to make the motor brake and continue to brake after stop and compensate for inaccuracies in the next command.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     * @returns
     */
    Motor.runForTime = function (port, duration, velocity, stop, acceleration, deceleration) {
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Turn a motor to an absolute position.
  When awaited returns a status of the movement that corresponds to one of the following constants:
  
  motor.READY
  motor.RUNNING
  motor.STALLED
  motor.CANCELED
  motor.ERROR
  motor.DISCONNECTED
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run_to_absolute_position
     * @param port A port from the port submodule in the hub module
     * @param position The degree of the motor
     * @param velocity The velocity in degrees/sec
  
  Value ranges depends on motor type.
  
  Small motor (essential): -660 to 660,
  Medium motor: -1110 to 1110,
  Large motor: -1050 to 1050
     * @param direction The direction to turn.
  Options are:
  
  motor.CLOCKWISE
  motor.COUNTERCLOCKWISE
  motor.SHORTEST_PATH
  motor.LONGEST_PATH
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
  
  Possible values are
  motor.COAST to make the motor coast until a stop.
  motor.BRAKE to brake and continue to brake after stop.
  motor.HOLD to tell the motor to hold it's position.
  motor.CONTINUE to tell the motor to keep running at whatever velocity it's running at until it gets another command.
  motor.SMART_COAST to make the motor brake until stop and then coast and compensate for inaccuracies in the next command.
  motor.SMART_BRAKE to make the motor brake and continue to brake after stop and compensate for inaccuracies in the next command
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     * @param deceleration The deceleration (deg/sec²) (1 - 10000)
     * @returns
     */
    Motor.runToAbsolutePosition = function (port, position, velocity, direction, stop, acceleration, deceleration) {
        if (direction === void 0) { direction = 2; }
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Turn a motor to a position relative to the current position.
  When awaited returns a status of the movement that corresponds to one of the following constants:
  
  motor.READY
  motor.RUNNING
  motor.STALLED
  motor.CANCELED
  motor.ERROR
  motor.DISCONNECTED
    * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run_to_relative_position
     * @param port
     * @param position
     * @param velocity
     * @param stop
     * @param acceleration
     * @param deceleration
     */
    Motor.runToRelativePosition = function (port, position, velocity, stop, acceleration, deceleration) {
        if (stop === void 0) { stop = 1; }
        if (acceleration === void 0) { acceleration = 1000; }
        if (deceleration === void 0) { deceleration = 1000; }
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
    };
    /**
     * Start a Motor with a specific pwm
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param pwm The PWM value (-10000-10000)
     */
    Motor.setDutyCycle = function (port, pwm) { };
    /**
     * Stops a motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-stop
     * @param port A port from the port submodule in the hub module
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     */
    Motor.stop = function (port, stop) {
        if (stop === void 0) { stop = 1; }
    };
    /**
     * Get the velocity (deg/sec) of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-velocity
     * @param port A port from the port submodule in the hub module
     */
    Motor.velocity = function (port) {
        return 0;
    };
    return Motor;
}());
exports.Motor = Motor;
