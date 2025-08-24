let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

if (isNaN(num1) || isNaN(num2)) {
  throw SyntaxError("Please enter a valid number only.");
}
// MDN list of errors in JS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

let sum = parseInt(num1) + parseInt(num2);
// If the input variables aren't parsed into integer value then the strings will get concatenated instead of addition of those two numbers.
console.log("The sum is: ", sum);

function main() {
  // console.log("The sum is: ", sum*x);
  // This throws an ReferenceError by JS, to handle this error, we will use try catch.
  try {
    console.log("The sum is: ", sum * x);
    return true;
  } catch (error) {
    console.log("An error occured.");
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    return false;
  } finally {
    // try catch works synchronously, so if something asynchronous like setTimeout(function()={//error code}) is there inside the try block then the script dies and the try won't work.
    console.log("files and db are being closed.");
  }
  // 'finally' block runs even if either the try or catch code block executes BUT the twist is that generally if something is returned from the function then, the codes comes out of the function but the part written in finally block runs irrespective of the return statement stated in either of the try catch block.
}
main();
