import { Hub } from ".";
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor
 * @extends Hub
 */
export declare class MotionSensor extends Hub {
    /**
     * Returns a tuple containing x, y & z acceleration values as integers. The values are mili G, so 1 / 1000 G
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-acceleration
     * @param rawUnfiltered If we want the data back raw and unfiltered
     */
    static acceleration(rawUnfiltered: boolean): [number, number, number];
    /**
     * Returns a tuple containing x, y & z angular velocity values as integers. The values are decidegrees per second
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-angular_velocity
     * @param rawUnfiltered If we want the data back raw and unfiltered
     */
    static angularVelocity(rawUnfiltered: boolean): [number, number, number];
    /**
     * Returns the gesture recognized.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-gesture
     */
    static gesture(): number;
    /**
     * Retrieve the face of the hub that yaw is relative to.
  If you put the hub on a flat surface with the face returned pointing up, when you rotate the hub only the yaw will update.
  motion_sensor.TOP: The SPIKE Prime hub face with the USB charging port.
  motion_sensor.FRONT: The SPIKE Prime hub face with the Light Matrix.
  motion_sensor.RIGHT: The right side of the SPIKE Prime hub when facing the front hub face.
  motion_sensor.BOTTOM: The side of the SPIKE Prime hub where the battery is.
  motion_sensor.BACK: The SPIKE Prime hub face where the speaker is.
  motion_sensor.LEFT: The left side of the SPIKE Prime hub when facing the front hub face.
      * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-get_yaw_face
     */
    static getYawFace(): number;
    /**
     * Returns the hub orientation quaternion as a tuple[w: float, x: float, y: float, z: float].
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-orientation
     */
    static quaternion(): [number, number, number, number];
    /**
     * Reset the tap count returned by the tap_count function
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-reset_tap_count
     */
    static resetTapCount(): void;
    /**
     * Change the yaw angle offset.
  The angle set will be the new yaw value.
      * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-set_yaw_angle
      * @param angle
     */
    static resetYaw(angle: number): void;
    /**
     * Change what hub face is used as the yaw face.If you put the hub on a flat surface with this face pointing up, when you rotate the hub only the yaw will update
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-set_yaw_face
     * @param up The hub face that should be set as the upwards facing hub face. Available values are:
  
  motion_sensor.TOP -> The SPIKE Prime hub face with the USB charging port.
  motion_sensor.FRONT -> The SPIKE Prime hub face with the Light Matrix.
  motion_sensor.RIGHT -> The right side of the SPIKE Prime hub when facing the front hub face.
  motion_sensor.BOTTOM -> The side of the SPIKE Prime hub where the battery is.
  motion_sensor.BACK -> The SPIKE Prime hub face where the speaker is.
  motion_sensor.LEFT -> The left side of the SPIKE Prime hub when facing the front hub face.
     */
    static setYawFace(up: number): boolean;
    /**
     * Whether or not the hub is resting flat.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-stable
     */
    static stable(): boolean;
    /**
     * Returns the number of taps recognized since the program started or last time motion_sensor.reset_tap_count() was called.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tap_count
     */
    static tapCount(): number;
    /**
     * Returns a tuple containing yaw pitch and roll values as integers. Values are decidegrees
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tilt_angles
     */
    static tiltAngles(): [number, number, number];
    /**
     * Returns the Hub face that is currently facing up:
  motion_sensor.TOP -> The SPIKE Prime hub face with the USB charging port.
  motion_sensor.FRONT -> The SPIKE Prime hub face with the Light Matrix.
  motion_sensor.RIGHT -> The right side of the SPIKE Prime hub when facing the front hub face.
  motion_sensor.BOTTOM -> The side of the SPIKE Prime hub where the battery is.
  motion_sensor.BACK -> The SPIKE Prime hub face where the speaker is.
  motion_sensor.LEFT -> The left side of the SPIKE Prime hub when facing the front hub face.
      * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-up_face
     */
    static upFace(): number;
    TAPPED: number;
    DOUBLE_TAPPED: number;
    SHAKEN: number;
    FALLING: number;
    UNKNOWN: number;
    TOP: number;
    FRONT: number;
    RIGHT: number;
    BOTTOM: number;
    BACK: number;
    LEFT: number;
}
