"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The color module contains all the color constants to use with the color_matrix, color_sensor and light modules.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-color
 */
var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["MAGENTA"] = 1] = "MAGENTA";
    Color[Color["PURPLE"] = 2] = "PURPLE";
    Color[Color["BLUE"] = 3] = "BLUE";
    Color[Color["AZURE"] = 4] = "AZURE";
    Color[Color["TURQUOISE"] = 5] = "TURQUOISE";
    Color[Color["GREEN"] = 6] = "GREEN";
    Color[Color["YELLOW"] = 7] = "YELLOW";
    Color[Color["ORANGE"] = 8] = "ORANGE";
    Color[Color["RED"] = 9] = "RED";
    Color[Color["WHITE"] = 10] = "WHITE";
    Color[Color["UNKNOWN"] = -1] = "UNKNOWN";
})(Color || (Color = {}));
exports.default = Color;
