"use strict";
// Imports
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionSensor = void 0;
var writeLine_1 = require("../../functions/writeLine");
var _1 = require(".");
// Code
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor
 * @extends Hub
 */
var MotionSensor = /** @class */ (function (_super) {
    __extends(MotionSensor, _super);
    function MotionSensor(variableName) {
        var _this = _super.call(this) || this;
        if (!variableName) {
            _this.variableName = "motionSensor";
        }
        else {
            _this.variableName = variableName;
            (0, writeLine_1.writeLine)("".concat(variableName, " = motion_sensor"), "code");
        }
        (0, writeLine_1.writeLine)("from hub import motion_sensor", "imports");
        return _this;
    }
    /**
     * Returns a tuple containing x, y & z acceleration values as integers. The values are mili G, so 1 / 1000 G
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-acceleration
     * @param rawUnfiltered If we want the data back raw and unfiltered
     */
    MotionSensor.prototype.acceleration = function (rawUnfiltered) { };
    /**
     * Returns a tuple containing x, y & z angular velocity values as integers. The values are decidegrees per second
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-angular_velocity
     * @param rawUnfiltered If we want the data back raw and unfiltered
     */
    MotionSensor.prototype.angularVelocity = function (rawUnfiltered) { };
    /**
     * Returns the gesture recognized.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-gesture
     */
    MotionSensor.prototype.gesture = function () { };
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
    MotionSensor.prototype.getYawFace = function () { };
    /**
     * Returns the hub orientation quaternion as a tuple[w: float, x: float, y: float, z: float].
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-orientation
     */
    MotionSensor.prototype.quaternion = function () { };
    /**
     * Reset the tap count returned by the tap_count function
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-reset_tap_count
     */
    MotionSensor.prototype.resetTapCount = function () { };
    /**
     * Change the yaw angle offset.
  The angle set will be the new yaw value.
      * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-set_yaw_angle
      * @param angle
     */
    MotionSensor.prototype.resetYawAngle = function (angle) { };
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
    MotionSensor.prototype.setYawFace = function (up) { };
    /**
     * Whether or not the hub is resting flat.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-stable
     */
    MotionSensor.prototype.stable = function () { };
    /**
     * Returns the number of taps recognized since the program started or last time motion_sensor.reset_tap_count() was called.
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tap_count
     */
    MotionSensor.prototype.tapCount = function () { };
    /**
     * Returns a tuple containing yaw pitch and roll values as integers. Values are decidegrees
     * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-hub-motion_sensor-func-tilt_angles
     */
    MotionSensor.prototype.tiltAngles = function () { };
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
    MotionSensor.prototype.upFace = function () { };
    return MotionSensor;
}(_1.Hub));
exports.MotionSensor = MotionSensor;
