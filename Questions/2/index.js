function fixWithLet(callback) {
  // TODO: Write a loop from 0 to 2 using 'let'.
  // Inside the loop, call setTimeout to execute callback(i) after 100ms.
}

function fixWithClosure(callback) {
  // TODO: Write a loop from 0 to 2 using 'var'.
  // Fix the scope issue using an IIFE (Immediately Invoked Function Expression).
  // Inside the IIFE, call setTimeout to execute callback(i) after 100ms.
}

function fixWithBind(callback) {
  // TODO: Write a loop from 0 to 2 using 'var'.
  // Fix the scope issue using .bind() on the setTimeout callback.
}

module.exports = { fixWithLet, fixWithClosure, fixWithBind };
