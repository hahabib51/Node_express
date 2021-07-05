### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  1. You can use async and await
  2. You can use promise chain made up of .then and .catch

- What is a Promise?

  A promise is code that can be resolved or rejected. You can chain it with callback functions depending on the result of the code.

- What are the differences between an async function and a regular function?

  By default, regular functions run synchronously. However, asynchronous functions can be waited upon using async and await.

- What is the difference between Node.js and Express.js?

  Node.js is a Javascript library used for applications outside of the browser (i.e. backend). Express is a framework built on top of Node.js providing server capabilities.

- What is the error-first callback pattern?

  The error-first callback pattern checks for an error before the rest of the function runs. If there is no error, then the rest of the function continues.

- What is middleware?

  Middleware is the functions that run after the server receives a request and before the requested routes function.

- What does the `next` function do?

  The `next` function calls the next middleware to run. If there are no arguments passed to `next()`, then it treats the current route as if it didn't run and tries to find a new route.

- What does `RETURNING` do in SQL? When would you use it?

  The `RETURNING` clause lets you retrieve the column values that were inserted, deleted, or updated. This allows for you to get these values without using a `SELECT` statement right after.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  1. Performance
     - Multiple promises that will only run one after the other. Better to use `Promise.all()`
  2. Structure
     - Return the values for elie, matt, and joel without saving them as variables.

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
