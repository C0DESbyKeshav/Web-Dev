/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

random = Math.random();
obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

function faulty_calc(n1, n2, op) {
  if (random > 0.1) {
    alert(`The result is: ${eval(`${n1} ${op} ${n2}`)}`);
  } else {
    op = obj[op];
    alert(`The result is: ${eval(`${n1} ${op} ${n2}`)}`);
  }
}

faulty_calc(35, 25, "+");
faulty_calc(35, 25, "-");
faulty_calc(35, 25, "*");
faulty_calc(35, 25, "/");
