function amazing(name) {
  console.log(name + " is amazing!");
  console.log(name + " is the key.");
  console.log(name + " is not easy.");
  console.log(name + " is so boring.");
  console.log(name + " is always fruitful.");
}

amazing("Consistency");

// This is default parameterized function; if the third value is missing then the default value will get assigned.
function sum(a, b, c = 5) {
  return a + b + c;
}

result = sum(25, 35);
console.log("The sum of two numbers is: ", result);

// * Arrow function : A function captured into a variable
const func = (x) => {
  console.log("I am an arrow function", x);
};

func(25);
func(5);
func(35);
