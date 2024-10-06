/**
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-motor-consts
 */
declare enum Motor {
    READY = 0,
    RUNNING = 1,
    STALLED = 2,
    CANCELLED = 3,
    ERROR = 4,
    DISCONNECTED = 5,
    COAST = 0,
    BRAKE = 1,
    HOLD = 2,
    CONTINUE = 3,
    SMART_COAST = 4,
    SMART_BRAKE = 5,
    CLOCKWISE = 0,
    COUNTERCLOCKWISE = 1,
    SHORTEST_PATH = 2,
    LONGEST_PATH = 3
}
export default Motor;
