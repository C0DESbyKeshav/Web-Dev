let age = 19;

//* Else If Ladder
if (age == 18) {
  console.log("Still dependent on your parents ?");
} else if (age < 18) {
  console.log("You are getting too comfortable.");
  console.log("Get the fuck UP.");
} else {
  console.log("Tired ?\nTake a nap.");
  console.log("Anyway 'FAILURE' suits you.");
}

//* Ternary Operator
let think =
  age >= 18
    ? "\nWant your parents to see the world right ?\nJust don't be too late."
    : "Kid";

console.log(think);

/* Operators:
1. Arithmetic: +, -, *, /, ** (exponential), %, ++, --
2. Assignment: =, +=, -=, *=, /=, %=, **=
3. Comparison: == ("2" == 2 will be a true statement), !=, === (equal value and type), !== (not equal value or not equal type), >, <, >=, <=, ? (ternary)  
4. Logical: &&, ||, !
5. Bitwise
*/
