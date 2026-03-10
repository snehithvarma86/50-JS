/**
 * Creates a counter object with encapsulated state.
 * @param {number} initialValue - The starting value (default: 0).
 * @returns {Object} An object with increment, decrement, and getValue methods.
 */
function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment: function (step = 1) {
      value += step;
      return value;
    },
    decrement: function (step = 1) {
      value -= step;
      return value;
    },
    getValue: function () {
      return value;
    },
  };
}

module.exports = createCounter;
