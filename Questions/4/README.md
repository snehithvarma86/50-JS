# Question 4: Run Once

**Difficulty:** Mid-Level Frontend  
**Topic:** Closures, Higher-Order Functions, State Management

## The Concept

In web development, you often have initialization logic that should strictly happen only a single time—like setting up a database connection, attaching a global event listener, or rendering a specific UI component.

Instead of relying on global boolean flags scattered throughout your codebase (e.g., `if (!hasInitialized) { ... }`), you can encapsulate this logic elegantly using a higher-order function. By leveraging a **closure**, a function can "remember" whether it has been executed before and securely store its initial return value.

## The Task

Inside `once.js`, implement a `once(fn)` utility function.

1. It should take a function `fn` as its only argument.
2. It must return a new function.
3. When this new function is called for the **first time**, it should execute the original `fn`, pass along any provided arguments, and remember the returned result.
4. If the new function is called **any subsequent times**, it must _not_ execute `fn` again. Instead, it should immediately return the result from the very first execution.
