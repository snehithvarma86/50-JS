const createCounter = require("./index.js");

function runTests() {
  console.log("Running tests for Q1...");

  try {
    const counterA = createCounter();
    console.assert(
      counterA.getValue() === 0,
      "Test 1a Failed: Default initial value should be 0",
    );
    counterA.increment();
    console.assert(
      counterA.getValue() === 1,
      "Test 1b Failed: Default increment should be 1",
    );
    counterA.decrement();
    console.assert(
      counterA.getValue() === 0,
      "Test 1c Failed: Default decrement should be 1",
    );

    const counterB = createCounter(10);
    console.assert(
      counterB.getValue() === 10,
      "Test 2a Failed: Initial value should be 10",
    );
    counterB.increment(5);
    console.assert(
      counterB.getValue() === 15,
      "Test 2b Failed: Increment by 5 should result in 15",
    );
    counterB.decrement(3);
    console.assert(
      counterB.getValue() === 12,
      "Test 2c Failed: Decrement by 3 should result in 12",
    );

    const counterC = createCounter(5);
    counterC.value = 99;
    console.assert(
      counterC.getValue() === 5,
      "Test 3 Failed: Internal state is exposed and was mutated from the outside!",
    );

    counterA.increment(100);
    console.assert(
      counterB.getValue() === 12,
      "Test 4 Failed: Modifying one counter affected another.",
    );

    console.log("✅ All tests passed for Question 1!");
  } catch (error) {
    console.error("❌ A test threw an error:", error.message);
  }
}

// Run the tests
runTests();
