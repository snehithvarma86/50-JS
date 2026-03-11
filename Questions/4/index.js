// once.js

/**
 * Ensures a function is only executed once.
 * @param {Function} fn - The function to be restricted.
 * @returns {Function} A new function that runs `fn` only on its first call.
 */
function once(fn) {
  // TODO: Define private state variables to track if it has run,
  // and to store the result of the first execution.

  return function (...args) {
    // TODO: Check if the function has already been executed.
    // TODO: If no, execute `fn` with the arguments, store the result, mark as run, and return the result.
    // TODO: If yes, just return the previously stored result.
  };
}

module.exports = once;
