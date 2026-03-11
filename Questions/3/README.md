# Question 3: Memoization

**Difficulty:** Mid-Level Frontend  
**Topic:** Closures, Performance Optimization, Higher-Order Functions

## The Concept

Memoization is a powerful optimization technique used to speed up computer programs by storing the results of expensive function calls. When the function is called again with the exact same inputs, the cached result is returned instead of re-computing the execution.

In JavaScript, this is typically achieved using **closures**. A higher-order function creates a private `cache` (usually an Object or a `Map`) and returns a new function. This new function intercepts the incoming arguments, generates a unique "cache key" from them, and checks if a result already exists in the cache for that key.

## The Task

Inside `memoize.js`, implement a `memoize(fn)` utility function.

1. It should take a function `fn` as its only argument.
2. It must return a new, memoized version of that function.
3. The memoized function should cache the results based on the arguments provided.
4. If the memoized function is called again with the _exact same_ arguments, it should return the cached result instead of executing the original `fn` again.
5. For simplicity, you can assume the arguments passed to the memoized function will be primitives (strings or numbers) that can be easily serialized into a cache key (e.g., using `JSON.stringify` or simple string concatenation).
