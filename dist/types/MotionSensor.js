"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faces = exports.MotionSensor = void 0;
var MotionSensor;
(function (MotionSensor) {
    MotionSensor[MotionSensor["TAPPED"] = 0] = "TAPPED";
    MotionSensor[MotionSensor["DOUBLE_TAPPED"] = 1] = "DOUBLE_TAPPED";
    MotionSensor[MotionSensor["SHAKEN"] = 2] = "SHAKEN";
    MotionSensor[MotionSensor["FALLING"] = 3] = "FALLING";
    MotionSensor[MotionSensor["UNKNOWN"] = -1] = "UNKNOWN";
})(MotionSensor || (exports.MotionSensor = MotionSensor = {}));
var Faces;
(function (Faces) {
    Faces[Faces["TOP"] = 0] = "TOP";
    Faces[Faces["FRONT"] = 1] = "FRONT";
    Faces[Faces["RIGHT"] = 2] = "RIGHT";
    Faces[Faces["BOTTOM"] = 3] = "BOTTOM";
    Faces[Faces["BACK"] = 4] = "BACK";
    Faces[Faces["LEFT"] = 5] = "LEFT";
})(Faces || (exports.Faces = Faces = {}));
