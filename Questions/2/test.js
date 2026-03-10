// loop.test.js
const { fixWithLet, fixWithClosure, fixWithBind } = require("./index.js");

async function runTests() {
  console.log("Running tests for Q2...\n");

  const runTest = (fn, testName) => {
    return new Promise((resolve) => {
      const results = [];

      try {
        fn((val) => results.push(val));
      } catch (e) {
        console.error(`❌ ${testName} failed with error: ${e.message}`);
        return resolve();
      }

      // Wait slightly longer than the 100ms timeout to verify results
      setTimeout(() => {
        const output = results.join(", ");
        if (output === "0, 1, 2") {
          console.log(`✅ ${testName} passed!`);
        } else {
          console.error(
            `❌ ${testName} failed. Expected '0, 1, 2', got '${output || "nothing"}'`,
          );
        }
        resolve();
      }, 150);
    });
  };

  await runTest(fixWithLet, "fixWithLet");
  await runTest(fixWithClosure, "fixWithClosure");
  await runTest(fixWithBind, "fixWithBind");

  console.log("\nTesting complete!");
}

runTests();
