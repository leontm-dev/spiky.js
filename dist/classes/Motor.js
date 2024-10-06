"use strict";
// Imports
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
exports.Motor = void 0;
var writeLine_1 = require("../functions/writeLine");
var MotorConstant = __importStar(require("../types/Motor"));
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor
 */
var Motor = /** @class */ (function () {
    function Motor(variableName) {
        if (!variableName) {
            this.variableName = "motor";
        }
        else {
            this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(this.variableName, " = motor"), "code");
        }
        (0, writeLine_1.writeLine)("import motor", "imports");
    }
    /**
     * Get the absolute position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-absolute_position
     * @param port A port from the port submodule in the hub module
     */
    Motor.prototype.absolutePosition = function (port) { };
    /**
     * Get the pwm of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    Motor.prototype.getDutyCycle = function (port) { };
    /**
     * Get the relative position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-relative_position
     * @param port A port from the port submodule in the hub module
     */
    Motor.prototype.relativePosition = function (port) { };
    /**
     * Change the position used as the offset when using the run_to_relative_position function.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-reset_relative_position
     * @param port A port from the port submodule in the hub module
     * @param position The degree of the motor
     */
    Motor.prototype.resetRelativePosition = function (port, position) { };
    /**
     * Start a Motor at a constant speed
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run
     * @param port A port from the port submodule in the hub module
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    Motor.prototype.run = function (port, velocity, acceleration) {
        if (acceleration && (acceleration < 1 || acceleration > 10000)) {
            throw new Error("Acceleration must be in range 1 to 10000");
        }
        if (acceleration === undefined) {
            acceleration = 1000;
        }
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
    Motor.prototype.runForDegrees = function (port, degrees, velocity, stop, acceleration, deceleration) {
        if (acceleration && (acceleration < 1 || acceleration > 10000)) {
            throw new Error("Acceleration must be in range 1 to 10000");
        }
        if (acceleration === undefined) {
            acceleration = 1000;
        }
        if (stop === undefined) {
            stop = MotorConstant.default.BRAKE;
        }
        if (deceleration && (deceleration < 1 || deceleration > 10000)) {
            throw new Error("Deceleration must be in range 1 to 10000");
        }
        if (deceleration === undefined) {
            deceleration = 1000;
        }
    };
    /**
     * Start a Motor with a specific pwm
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param pwm The PWM value (-10000-10000)
     */
    Motor.prototype.setDutyCycle = function (port, pwm) {
        if (pwm < -10000 || pwm > 10000) {
            throw new Error("PWM must be in range -10000 to 10000");
        }
    };
    /**
     * Stops a motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-stop
     * @param port A port from the port submodule in the hub module
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     */
    Motor.prototype.stop = function (port, stop) {
        if (stop === undefined) {
            stop = MotorConstant.default.BRAKE;
        }
    };
    /**
     * Get the velocity (deg/sec) of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-velocity
     * @param port A port from the port submodule in the hub module
     */
    Motor.prototype.velocity = function (port) { };
    return Motor;
}());
exports.Motor = Motor;
