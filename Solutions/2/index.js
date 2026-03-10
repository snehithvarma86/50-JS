function fixWithLet(callback) {
  // TODO: Write a loop from 0 to 2 using 'let'.
  // Inside the loop, call setTimeout to execute callback(i) after 100ms.
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      callback(i);
    }, 100);
  }
}

function fixWithClosure(callback) {
  // TODO: Write a loop from 0 to 2 using 'var'.
  // Fix the scope issue using an IIFE (Immediately Invoked Function Expression).
  // Inside the IIFE, call setTimeout to execute callback(i) after 100ms.
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(() => callback(i), 100);
    })(i);
  }
}

function fixWithBind(callback) {
  // TODO: Write a loop from 0 to 2 using 'var'.
  // Fix the scope issue using .bind() on the setTimeout callback.

  for (var i = 0; i < 3; i++) {
    setTimeout(callback.bind(null, i), 100);
  }
}

module.exports = { fixWithLet, fixWithClosure, fixWithBind };
