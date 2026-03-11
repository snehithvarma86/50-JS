// once.test.js
const once = require("./index.js");

function runTests() {
  console.log("Running tests for Q4...\n");

  try {
    let executionCount = 0;

    // A mock initialization function
    const initializeApp = (appName) => {
      executionCount++;
      return `Successfully initialized ${appName}`;
    };

    const runOnceInit = once(initializeApp);

    // Test 1: First call should execute the function
    const result1 = runOnceInit("MyApp");
    console.assert(
      result1 === "Successfully initialized MyApp",
      "Test 1 Failed: Did not return correct string",
    );
    console.assert(
      executionCount === 1,
      "Test 1 Failed: Execution count should be 1",
    );

    // Test 2: Second call should NOT execute the function, but return the first result
    const result2 = runOnceInit("AnotherApp"); // Passing different args to prove it doesn't re-run
    console.assert(
      result2 === "Successfully initialized MyApp",
      "Test 2 Failed: Did not return the cached result from the first run",
    );
    console.assert(
      executionCount === 1,
      "Test 2 Failed: Function executed more than once!",
    );

    // Test 3: Third call should also just return the first result
    const result3 = runOnceInit();
    console.assert(
      result3 === "Successfully initialized MyApp",
      "Test 3 Failed: Did not return the cached result",
    );
    console.assert(
      executionCount === 1,
      "Test 3 Failed: Function executed more than once!",
    );

    console.log("✅ All tests passed for Question 4!");
  } catch (error) {
    console.error("❌ A test threw an error:", error.message);
  }
}

runTests();
