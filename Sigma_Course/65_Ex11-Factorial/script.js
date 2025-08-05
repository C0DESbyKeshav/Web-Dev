let num = prompt("Enter a non-negative integer:");

// * M-1: Using for loop
let fact = num;

for (let i = 1; i < num; i++) {
  fact *= i;
}
alert(`The factorial of ${num} is ${fact}`);
