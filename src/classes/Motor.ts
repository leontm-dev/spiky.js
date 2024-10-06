// Imports

import { writeLine } from "../functions/writeLine";
import Port from "../types/Port";
import * as MotorConstant from "../types/Motor";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor
 */
export class Motor {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "motor";
    } else {
      this.variableName = variableName;
      writeLine(`${this.variableName} = motor`, "code");
    }
    writeLine("import motor", "imports");
  }
  /**
   * Get the absolute position of a Motor
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-absolute_position
   * @param port A port from the port submodule in the hub module
   */
  absolutePosition(port: Port) {}
  /**
   * Get the pwm of a Motor
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-get_duty_cycle
   * @param port A port from the port submodule in the hub module
   */
  getDutyCycle(port: Port) {}
  /**
   * Get the relative position of a Motor
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-relative_position
   * @param port A port from the port submodule in the hub module
   */
  relativePosition(port: Port) {}
  /**
   * Change the position used as the offset when using the run_to_relative_position function.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-reset_relative_position
   * @param port A port from the port submodule in the hub module
   * @param position The degree of the motor
   */
  resetRelativePosition(port: Port, position: number) {}
  /**
   * Start a Motor at a constant speed
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run
   * @param port A port from the port submodule in the hub module
   * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   */
  run(port: Port, velocity: number, acceleration?: number) {
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
  }
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
  runForDegrees(
    port: Port,
    degrees: number,
    velocity: number,
    stop?: MotorConstant.default,
    acceleration?: number,
    deceleration?: number
  ) {
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
  }
  /**
   * Start a Motor with a specific pwm
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-set_duty_cycle
   * @param port A port from the port submodule in the hub module
   * @param pwm The PWM value (-10000-10000)
   */
  setDutyCycle(port: Port, pwm: number) {
    if (pwm < -10000 || pwm > 10000) {
      throw new Error("PWM must be in range -10000 to 10000");
    }
  }
  /**
   * Stops a motor
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-stop
   * @param port A port from the port submodule in the hub module
   * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
   */
  stop(port: Port, stop?: MotorConstant.default) {
    if (stop === undefined) {
      stop = MotorConstant.default.BRAKE;
    }
  }
  /**
   * Get the velocity (deg/sec) of a Motor
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-velocity
   * @param port A port from the port submodule in the hub module
   */
  velocity(port: Port) {}
}
