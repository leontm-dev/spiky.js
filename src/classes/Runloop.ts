// Imports

import { writeLine } from "../functions/writeLine";

// Code

/**
 * The runloop module contains all functions and constants to use the Runloop.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop
 */
export class Runloop {
  readonly variableName: string;
  constructor(variableName?: string) {
    if (!variableName) {
      this.variableName = "runloop";
    } else {
      this.variableName = variableName;
      writeLine(`${this.variableName} = runloop`, "code");
    }
    writeLine("import runloop", "imports");
  }
  /**
   * Start any number of parallel async functions. This is the function you should use to create programs with a similar structure to Word Blocks.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop-func-run
   * @param functions The functions to run
   */
  run(functions: Function[]) {}
  /**
   * Pause the execution of the application for any amount of milliseconds.
   * @param duration The duration in milliseconds
   */
  sleepMs(duration: number) {}
}
