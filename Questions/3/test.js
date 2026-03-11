// memoize.test.js
const memoize = require("./memoize.js");

function runTests() {
  console.log("Running tests for Q3...\n");

  try {
    let callCount = 0;

    // A mock "expensive" function
    const add = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedAdd = memoize(add);

    // Test 1: Initial call computes the value
    const result1 = memoizedAdd(2, 3);
    console.assert(result1 === 5, "Test 1 Failed: Expected 5");
    console.assert(
      callCount === 1,
      "Test 1 Failed: Original function should be called exactly once",
    );

    // Test 2: Second call with exact same arguments should use cache
    const result2 = memoizedAdd(2, 3);
    console.assert(result2 === 5, "Test 2 Failed: Expected 5");
    console.assert(
      callCount === 1,
      "Test 2 Failed: Cached result used, call count should still be 1",
    );

    // Test 3: Call with different arguments should compute new value
    const result3 = memoizedAdd(4, 5);
    console.assert(result3 === 9, "Test 3 Failed: Expected 9");
    console.assert(
      callCount === 2,
      "Test 3 Failed: Original function should be called again for new args",
    );

    // Test 4: Call with previous arguments should still use cache
    const result4 = memoizedAdd(2, 3);
    console.assert(result4 === 5, "Test 4 Failed: Expected 5");
    console.assert(
      callCount === 2,
      "Test 4 Failed: Call count should still be 2",
    );

    console.log("✅ All tests passed for Question 3!");
  } catch (error) {
    console.error("❌ A test threw an error:", error.message);
  }
}

runTests();
