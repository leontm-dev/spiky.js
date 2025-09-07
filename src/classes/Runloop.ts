// Code

/**
 * The runloop module contains all functions and constants to use the Runloop.
 * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop
 */
export class Runloop {
  /**
   * Start any number of parallel async functions. This is the function you should use to create programs with a similar structure to Word Blocks.
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop-func-run
   * @param functions The functions to run
   */
  static run(functions: (() => Promise<unknown>)[]): void {}
  /**
   * Pause the execution of the application for any amount of milliseconds.
   * @param duration The duration in milliseconds
   */
  static sleepMs(duration: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  /**
   * Returns an awaitable that will return when the condition in the function or lambda passed is True or when it times out
   * @see https://spike.legoeducation.com/prime/modal/help/lls-help-python#lls-help-python-spm-runloop-func-until
   * @param func A callable with no parameters that returns either True or False.
Callable is anything that can be called, so a def or a lambda
   * @param timeout A timeout for the function in milliseconds.
If the callable does not return True within the timeout, the until still resolves after the timeout.
0 means no timeout, in that case it will not resolve until the callable returns True
   */
  static until(func: () => boolean, timeout = 0): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
