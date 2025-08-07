let num = prompt("Enter a non-negative integer:");

// * M-1: Using for loop
let fact = num;

if (num == 0) {
  alert(`The factorial of ${num} is 1 by definition.`);
} else if (num > 0) {
  for (let i = 1; i < num; i++) {
    fact *= i;
  }
  alert(`The factorial of ${num} using loop is ${fact}`);
} else {
  alert("Please enter a non-negative integer.");
}

// * M-II: Using reduce
let arr = [];

if (num == 0) {
  alert(`The factorial of ${num} is 1 by definition.`);
} else if (num > 0) {
  for (let i = 0; i < num; i++) {
    arr[i] = i + 1;
  }

  const factorial = (a, b) => {
    return a * b;
  };

  let ans = arr.reduce(factorial);

  alert(`The factorial of ${num} using reduce function is ${ans}`);
} else {
  alert("Please enter a non-negative integer.");
}
