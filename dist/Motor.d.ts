/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor
 */
export declare class Motor {
    /**
     * Get the absolute position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-absolute_position
     * @param port A port from the port submodule in the hub module
     */
    static absolutePosition(port: number): number;
    /**
     * Get the pwm of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-get_duty_cycle
     * @param port A port from the port submodule in the hub module
     */
    static getDutyCycle(port: number): number;
    /**
     * Get the relative position of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-relative_position
     * @param port A port from the port submodule in the hub module
     */
    static relativePosition(port: number): number;
    /**
     * Change the position used as the offset when using the run_to_relative_position function.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-reset_relative_position
     * @param port A port from the port submodule in the hub module
     * @param position The degree of the motor
     */
    static resetRelativePosition(port: number, position: number): void;
    /**
     * Start a Motor at a constant speed
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-run
     * @param port A port from the port submodule in the hub module
     * @param velocity The velocity in degrees/sec. Value ranges depends on motor type. Small motor (essential): -660 to 660 / Medium motor: -1110 to 1110 / Large motor: -1560 to 1560
     * @param acceleration The acceleration (deg/sec²) (1 - 10000)
     */
    static run(port: number, velocity: number, acceleration?: number): void;
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
    static runForDegrees(port: number, degrees: number, velocity: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
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
    static runForTime(port: number, duration: number, velocity: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
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
    static runToAbsolutePosition(port: number, position: number, velocity: number, direction?: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
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
    static runToRelativePosition(port: number, position: number, velocity: number, stop?: number, acceleration?: number, deceleration?: number): Promise<unknown>;
    /**
     * Start a Motor with a specific pwm
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-set_duty_cycle
     * @param port A port from the port submodule in the hub module
     * @param pwm The PWM value (-10000-10000)
     */
    static setDutyCycle(port: number, pwm: number): void;
    /**
     * Stops a motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-stop
     * @param port A port from the port submodule in the hub module
     * @param stop The behavior of the Motor after it has stopped. Use the constants in the motor module.
     */
    static stop(port: number, stop?: number): void;
    /**
     * Get the velocity (deg/sec) of a Motor
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-func-velocity
     * @param port A port from the port submodule in the hub module
     */
    static velocity(port: number): number;
    READY: number;
    RUNNING: number;
    STALLED: number;
    CANCELLED: number;
    ERROR: number;
    DISCONNECTED: number;
    COAST: number;
    BRAKE: number;
    HOLD: number;
    CONTINUE: number;
    SMART_COAST: number;
    SMART_BRAKE: number;
    CLOCKWISE: number;
    COUNTERCLOCKWISE: number;
    SHORTEST_PATH: number;
    LONGEST_PATH: number;
}
