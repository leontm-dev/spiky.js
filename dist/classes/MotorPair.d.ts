/**
 * The motor_pair module is used to run motors in a synchronized fashion. This mode is optimal for creating drivebases where you'd want a pair of motors to start and stop at the same time.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair
 */
export declare class MotorPair {
    /**
     * Move a Motor Pair at a constant speed until a new command is given.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move
     * @param pair The pair slot of the Motor Pair.
     * @param steering The steering (-100 to 100)
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    static move(pair: number, steering: number, velocity?: number, acceleration?: number): void;
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
    static moveForDegrees(pair: number, degrees: number, steering: number, velocity?: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
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
    static moveForTime(pair: number, duration: number, steering: number, velocity?: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
    /**
     * Perform a tank move on a Motor Pair at a constant speed until a new command is given.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-move_tank
     * @param pair The pair slot of the Motor Pair.
     * @param leftVelocity The velocity (deg/sec) of the left motor.
     * @param rightVelocity The velocity (deg/sec) of the right motor.
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    static moveTank(pair: number, leftVelocity: number, rightVelocity: number, acceleration?: number): void;
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
    static moveTankForDegrees(pair: number, degrees: number, leftVelocity: number, rightVelocity: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
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
    static moveTankForTime(pair: number, duration: number, leftVelocity: number, rightVelocity: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
    /**
     * pair two motors (left_motor & right_motor) and store the paired motors in pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-pair
     * @param pair The pair slot of the Motor Pair.
     * @param rightMotor The port of the right motor. Use the port submodule in the hub module.
     * @param leftMotor The port of the left motor. Use the port submodule in the hub module.
     */
    static pair(pair: number, leftMotor: number, rightMotor: number): void;
    /**
     * Stops a Motor Pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-stop
     * @param pair The pair slot of the Motor Pair.
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     */
    static stop(pair: number, stop?: number): void;
    /**
     * Unpair a Motor Pair.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor_pair-func-unpair
     * @param pair The pair slot of the Motor Pair.
     */
    static unpair(pair: number): void;
    static PAIR_1: number;
    static PAIR_2: number;
    static PAIR_3: number;
}
