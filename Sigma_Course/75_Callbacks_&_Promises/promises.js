//* The solution to the 'callback hell' is promises.
//* A promise is a "promise of the code execution".
// The code either executes or fails, in both the cases, the subscriber will be notified.

// The syntax of a promise looks like this:
// let promise = new Promise(function (resolve, reject) {
//    executor;
// });
// where, resolve and reject are both predefined in JS engine.

// resolve and reject are two callbacks provided by JS itself. They are called like this:
// resolve(value) --> If the job is finished successfully.
// reject(error) --> If the job fails.

// The promise object returned by the new Promise constructor has three properties:
// 1. state: Initially pending; then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// 2. result: Initially undefined; then changes to value if resolved or error when rejected.

/*
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Random number isn't in your favour today");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Keshav");
    }, 3000);
  }
});

// * Consumers: .then and .catch
// The consuming code can receive the final result of a promise through .then and .catch

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// * Promises Chaining:
// We can chain promises and make them pass the resolved values to one another like this:
// p.then(function(result)=>{
//     alert(result);
//     return 2;
// }).then ......

// The idea is to pass the result through the chain of .then handlers.
// Here is the flow of execution:
// 1. The initial promise resolves in 1 sec (Assumption).
// 2. The next .then handler is then called, which returns a new promise(resolved with two value).
// 3. The next .then gets the result from the previous one and this keeps on going.

// Every call to .then returns a new promise whose value is passed to the next one and so on.
// We can even create custom promises inside .then()

// * Attaching multiple handlers:
// We can attach multiple handlers to one promise.
// They don't pass the result to each other; instead they process it independently.
// Let p is a promise
// p.then(handler1);
// p.then(handler2);
// p.then(handler3);
// These all three runs independently.

// * Promise API:
// There are 6 static methods of Promise class.
// 1. Promise.all(promises)
// --> Waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error and all other results are ignored.

// 2. Promise.allSettled(promises)
// --> Waits for all the promises to settle and returns their results as an array of objects with status and value.

// 3. Promise.race(promises)
// --> Waits for the first promise to settle and its result/error becomes the outcome.

// 4. Promise.any(promises)
// --> Waits for the first promise to fulfill (& not rejected), and its result becomes the outcome. Throws AggregateError if all the promises are rejected.

// 5. Promise.resolve(value)
// --> Makes a resolved promise with the given value.

// 6. Promise.reject(error)
// --> Makes a rejected promise with the given error.

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Keshav");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Keshav 2");
    }, 1000);
  }
});

let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
