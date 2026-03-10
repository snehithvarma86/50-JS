# Question 2: The Classic Loop

**Difficulty:** Mid-Level Frontend  
**Topic:** Scope, Closures, and the Event Loop

## The Concept

Look at this broken piece of code:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

If you run this, it logs 3, 3, 3 instead of the expected 0, 1, 2.

Why? Because var is function-scoped, not block-scoped. There is only one i variable in memory. The for loop runs instantly, incrementing i up to 3. Meanwhile, the setTimeout callbacks are pushed to the Web APIs and wait in the task queue.

By the time the Call Stack is empty and the event loop finally executes those delayed callbacks, the loop is long gone, and the single i variable holds the value 3. All three callbacks reference that exact same i.

The Task
Inside loop.js, rewrite the broken loop in three different ways so that it correctly passes 0, 1, 2 to the provided callback function.

fixWithLet: Fix the issue using modern ES6 block scoping.

fixWithClosure: Fix the issue by wrapping the setTimeout in an Immediately Invoked Function Expression (IIFE) to create a new closure scope for every iteration.

fixWithBind: Fix the issue by using Function.prototype.bind to lock in the value of i.

Note: For testing purposes, we are using a callback(i) instead of console.log(i) so our test file can read the outputs.
