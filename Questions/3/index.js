// memoize.js

/**
 * Creates a memoized version of the provided function.
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} A new function that caches the results of `fn`.
 */
function memoize(fn) {
  // TODO: Initialize a cache (e.g., an object or a Map)

  return function (...args) {
    // TODO: Create a unique key from the arguments (e.g., JSON.stringify)
    // TODO: Check if the key already exists in the cache
    // TODO: If yes, return the cached value directly
    // TODO: If no, call the original function (fn) with the arguments
    // TODO: Store the result in the cache and return it
  };
}

module.exports = memoize;
