"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-consts
 */
var Motor;
(function (Motor) {
    Motor[Motor["READY"] = 0] = "READY";
    Motor[Motor["RUNNING"] = 1] = "RUNNING";
    Motor[Motor["STALLED"] = 2] = "STALLED";
    Motor[Motor["CANCELLED"] = 3] = "CANCELLED";
    Motor[Motor["ERROR"] = 4] = "ERROR";
    Motor[Motor["DISCONNECTED"] = 5] = "DISCONNECTED";
    Motor[Motor["COAST"] = 0] = "COAST";
    Motor[Motor["BRAKE"] = 1] = "BRAKE";
    Motor[Motor["HOLD"] = 2] = "HOLD";
    Motor[Motor["CONTINUE"] = 3] = "CONTINUE";
    Motor[Motor["SMART_COAST"] = 4] = "SMART_COAST";
    Motor[Motor["SMART_BRAKE"] = 5] = "SMART_BRAKE";
    Motor[Motor["CLOCKWISE"] = 0] = "CLOCKWISE";
    Motor[Motor["COUNTERCLOCKWISE"] = 1] = "COUNTERCLOCKWISE";
    Motor[Motor["SHORTEST_PATH"] = 2] = "SHORTEST_PATH";
    Motor[Motor["LONGEST_PATH"] = 3] = "LONGEST_PATH";
})(Motor || (Motor = {}));
exports.default = Motor;
