// settle means resolve or reject.
// resolve means promise has settled successfully.
// reject means promise has been rejected.

// function getData() {
//   // Just a simulation of fetching of data from somewhere else and load, data loading time simulation done with the help of timeout to make it feel like its taking time to load the data.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

// * Async function:
// async function getData() {
//   // Just a simulation of fetching of data from somewhere else and load, data loading time simulation done with the help of timeout to make it feel like its taking time to load the data.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }
// async means that this function will run in the background when called.

async function getData() {
  // Simulation of fetching data from the server using fetch API.

  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // To fetch the api, it will take some time because fetch() returns a promise, so we will await to do it.

  let data = await x.json();
  // To parse (understand) the data, it will take some time because json() returns a promise, so we will await to let it parse and then move to the next instruction.
  // To observe this in the DOM console, slow down the network speed in Dev Tools.
  // let data = await x.text();
  // You can also parse in the text format.

  return data;
}

// There are different types of request that can be made. e.g.: get, post, etc.
// GET request: The normal request which is made everything to search anything in a browser or open a site.
// POST request: This request is made when the user has to submit the form, login data has to be send to the server or files to be uploaded to the server, etc.

// GET → Read
// POST → Create
// PUT → Update (full)
// PATCH → Update (partial)
// DELETE → Delete

async function main() {
  console.log("Loading modules...");

  console.log("Something else...");

  console.log("Loading Data...");
  let data = await getData();
  // await can only be used when the function is async.
  // if await is used, it will wait for the getData() function to execute and then it will execute rest of the below script.

  console.log(data);
  // Loading the data in the background and executing rest of the scripts first since setTimeout is an asynchronous function.

  console.log("Processing Data...");

  console.log("Task 2");
}

main();

// data.then((p) => {
//   console.log(data);
// });
// Async/Await was introduced to resolve the promises error in a different and new way.
