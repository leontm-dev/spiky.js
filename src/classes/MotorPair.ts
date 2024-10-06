// Imports

import { writeLine } from "../functions/writeLine";
import Motor from "../types/Motor";
import Port from "../types/Port";

// Code

/**
 * The motor_pair module is used to run motors in a synchronized fashion. This mode is optimal for creating drivebases where you'd want a pair of motors to start and stop at the same time.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair
 */
export class MotorPair {
  readonly variableName: string;
  portA: Port;
  portB: Port;
  constructor(variableName: string, portA: Port, portB: Port) {
    this.variableName = variableName;
    if (portA === portB) {
      throw new Error("MotorPair ports must be different");
    }
    this.portA = portA;
    this.portB = portB;
  }
  /**
   * Move a Motor Pair at a constant speed until a new command is given.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move
   * @param steering The steering (-100 to 100)
   * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   */
  move(steering: number, velocity?: number, acceleration?: number) {
    if (steering < -100 || steering > 100) {
      throw new Error("Steering must be in range -100 to 100");
    }
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
  }
  /**
   * Move a Motor Pair at a constant speed for a specific number of degrees.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_for_degrees
   * @param degrees The number of degrees
   * @param steering The steering (-100 to 100)
   * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
   * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   * @param deceleration The deceleration (deg/sec²) (1 - 10000)
   */
  moveForDegrees(
    degrees: number,
    steering: number,
    velocity?: number,
    stop?: Motor,
    acceleration?: number,
    deceleration?: number
  ) {
    if (steering < -100 || steering > 100) {
      throw new Error("Steering must be in range -100 to 100");
    }
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (deceleration && (deceleration < 1 || deceleration > 10000)) {
      throw new Error("Deceleration must be in range 1 to 10000");
    }
    if (stop === undefined) {
      stop = Motor.BRAKE;
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
    if (deceleration === undefined) {
      deceleration = 1000;
    }
    if (velocity === undefined) {
      velocity = 360;
    }
  }
  /**
   * Move a Motor Pair at a constant speed for a specific duration.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_for_time
   * @param duration
   * @param steering
   * @param velocity
   * @param stop
   * @param acceleration
   * @param deceleration
   */
  moveForTime(
    duration: number,
    steering: number,
    velocity?: number,
    stop?: Motor,
    acceleration?: number,
    deceleration?: number
  ) {
    if (steering < -100 || steering > 100) {
      throw new Error("Steering must be in range -100 to 100");
    }
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (deceleration && (deceleration < 1 || deceleration > 10000)) {
      throw new Error("Deceleration must be in range 1 to 10000");
    }
    if (stop === undefined) {
      stop = Motor.BRAKE;
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
    if (deceleration === undefined) {
      deceleration = 1000;
    }
    if (velocity === undefined) {
      velocity = 360;
    }
  }
  /**
   * Perform a tank move on a Motor Pair at a constant speed until a new command is given.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank
   * @param leftVelocity The velocity (deg/sec) of the left motor.
   * @param rightVelocity The velocity (deg/sec) of the right motor.
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   */
  moveTank(leftVelocity: number, rightVelocity: number, acceleration?: number) {
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
  }
  /**
   * Perform a tank move on a Motor Pair at a constant speed until a new command is given.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank_for_degrees
   * @param degrees The number of degrees
   * @param leftVelocity The velocity (deg/sec) of the left motor.
   * @param rightVelocity The velocity (deg/sec) of the right motor.
   * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   * @param deceleration The deceleration (deg/sec²) (1 - 10000)
   */
  moveTankForDegrees(
    degrees: number,
    leftVelocity: number,
    rightVelocity: number,
    stop?: Motor,
    acceleration?: number,
    deceleration?: number
  ) {
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (deceleration && (deceleration < 1 || deceleration > 10000)) {
      throw new Error("Deceleration must be in range 1 to 10000");
    }
    if (stop === undefined) {
      stop = Motor.BRAKE;
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
    if (deceleration === undefined) {
      deceleration = 1000;
    }
  }
  /**
   * Perform a tank move on a Motor Pair at a constant speed for a specific amount of time.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank_for_time
   * @param duration The duration in milliseconds
   * @param leftVelocity The velocity (deg/sec) of the left motor.
   * @param rightVelocity The velocity (deg/sec) of the right motor.
   * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
   * @param acceleration The acceleration (deg/sec²) (1 - 10000)
   * @param deceleration The deceleration (deg/sec²) (1 - 10000)
   */
  moveTankForTime(
    duration: number,
    leftVelocity: number,
    rightVelocity: number,
    stop?: Motor,
    acceleration?: number,
    deceleration?: number
  ) {
    if (acceleration && (acceleration < 1 || acceleration > 10000)) {
      throw new Error("Acceleration must be in range 1 to 10000");
    }
    if (deceleration && (deceleration < 1 || deceleration > 10000)) {
      throw new Error("Deceleration must be in range 1 to 10000");
    }
    if (stop === undefined) {
      stop = Motor.BRAKE;
    }
    if (acceleration === undefined) {
      acceleration = 1000;
    }
    if (deceleration === undefined) {
      deceleration = 1000;
    }
  }
  /**
   * pair two motors (left_motor & right_motor) and store the paired motors in pair.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-pair
   * @param rightMotor The port of the right motor. Use the port submodule in the hub module.
   * @param leftMotor The port of the left motor. Use the port submodule in the hub module.
   */
  pair(leftMotor: Port, rightMotor: Port) {
    if (leftMotor === rightMotor) {
      throw new Error("MotorPair ports must be different");
    }
    this.portA = leftMotor;
    this.portB = rightMotor;
  }
  /**
   * Stops a Motor Pair.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-stop
   * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
   */
  stop(stop?: Motor) {
    if (stop === undefined) {
      stop = Motor.BRAKE;
    }
  }
}
