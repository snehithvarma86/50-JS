# Question 1: Private Variables and Closures

**Difficulty:** Mid-Level Frontend  
**Topic:** Closures, Scope, Encapsulation

## The Concept

In JavaScript, achieving true encapsulation (hiding data from the outside) traditionally relies on **closures**. A closure is created when an inner function remembers and accesses the variables from its outer lexical scope, even after the outer function has finished executing.

Understanding closures is crucial for mid-level developers because it prevents external, third-party, or global code from accidentally (or maliciously) mutating your application's internal state.

## The Task

Write a factory function called `createCounter` inside `counter.js` that meets the following requirements:

1. **Initialization:** It should accept an `initialValue` parameter, which defaults to `0` if not provided.
2. **Return Value:** It must return an object containing exactly three methods: `increment`, `decrement`, and `getValue`.
3. **`increment(step)`:** Increases the internal counter by the `step` amount. If `step` is not provided, it should default to `1`.
4. **`decrement(step)`:** Decreases the internal counter by the `step` amount. If `step` is not provided, it should default to `1`.
5. **`getValue()`:** Returns the current value of the internal counter.
6. **Strict Constraint:** The internal counter variable must be completely **private**. It cannot be read or modified directly via the returned object.

### Example Usage

```javascript
const counter = createCounter(5);

counter.increment(); // internal state is now 6
counter.increment(4); // internal state is now 10
counter.decrement(2); // internal state is now 8

console.log(counter.getValue()); // Outputs: 8
console.log(counter.value); // Outputs: undefined (State is private!)
```
