// Imports

import { writeLine } from "../../functions/writeLine";
import { Hub } from ".";
import { Faces } from "../../types/MotionSensor";

// Code

/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor
 * @extends Hub
 */
export class MotionSensor extends Hub {
  readonly variableName: string;
  constructor(variableName?: string) {
    super();
    if (!variableName) {
      this.variableName = "motionSensor";
    } else {
      this.variableName = variableName;
      writeLine(`${variableName} = motion_sensor`, "code");
    }
    writeLine("from hub import motion_sensor", "imports");
  }
  /**
   * Returns a tuple containing x, y & z acceleration values as integers. The values are mili G, so 1 / 1000 G
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-acceleration
   * @param rawUnfiltered If we want the data back raw and unfiltered
   */
  acceleration(rawUnfiltered: boolean) {}
  /**
   * Returns a tuple containing x, y & z angular velocity values as integers. The values are decidegrees per second
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-angular_velocity
   * @param rawUnfiltered If we want the data back raw and unfiltered
   */
  angularVelocity(rawUnfiltered: boolean) {}
  /**
   * Returns the gesture recognized.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-gesture
   */
  gesture() {}
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
  getYawFace() {}
  /**
   * Returns the hub orientation quaternion as a tuple[w: float, x: float, y: float, z: float].
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-orientation
   */
  quaternion() {}
  /**
   * Reset the tap count returned by the tap_count function
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-reset_tap_count
   */
  resetTapCount() {}
  /**
   * Change the yaw angle offset.
The angle set will be the new yaw value. 
    * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-set_yaw_angle
    * @param angle
   */
  resetYawAngle(angle: number) {}
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
  setYawFace(up: Faces) {}
  /**
   * Whether or not the hub is resting flat.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-stable
   */
  stable() {}
  /**
   * Returns the number of taps recognized since the program started or last time motion_sensor.reset_tap_count() was called.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tap_count
   */
  tapCount() {}
  /**
   * Returns a tuple containing yaw pitch and roll values as integers. Values are decidegrees
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tilt_angles
   */
  tiltAngles() {}
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
  upFace() {}
}
