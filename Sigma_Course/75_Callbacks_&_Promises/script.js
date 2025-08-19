// * Asynchronous actions are the actions that we initiate now and they finish later i.e. JS asynchronuous functions/events ko taal ke rakhta hai, aur poore script ko execute karne ke baad usko execute karta hai.
// e.g. setTimeout
console.log("Luffy is Nika.");
console.log("Nika is the Sun God.");

setTimeout(() => {
  console.log("I am settimeout function.");
}, 0);
// Even if this is written before "Zoro being the best waifu", as it an asynchronous function, JS will hold its execution until rest of the script is executed.

console.log("Zoro is the best waifu ever.");

// * Callback function:
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.
// Callback matlab iss function ke parameter mein koi dusra function jiske parameter mein bhi koi dusra function and so on..
// When we have callback inside callbacks, the code gets difficult to manage.
// As calls become more nested, the code becomes deeper and increasingly more difficult to manage, and especially if the innermost called functions also have very long code.
// This is sometimes called "callback hell" or "pyramid of doom".
// The "pyramid" of these calls grows towards the right with every asynchronous action.
// Soon it spirals out of control.
// So this way of coding isn't good.
// This fault is resolved by promises.

const fn = () => {
  console.log("Nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

// This is called "callback-based" style of async programming.
// A function that does something asynchronously should provide a callback argument where we put the function to run after its complete.
// If a function works asynchronously, it cannot immediately return the result.
// So instead, it takes a callback function as an extra argument.
// When the async work finishes, it calls your callback to continue.
// "Callback-based async" means: ‘Do this work in the background, and when you’re done, call this other function I gave you.’

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Keshav", fn);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
