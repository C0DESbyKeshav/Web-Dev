/* Types of Loops:
1. for loop => loops a block of code number of times.
2. for in loop => loops through the keys of an Object.
3. for of loop => loops through the values of an Object.
4. while loop => loops a block based on a specific condition.
5. do-while loop => iis a variant of while loop which runs atleast once irrespective of the condition. */

// * 1. for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// * 2. for in loop
let obj = {
  name: "Keshav",
  "long-term dream": "World Tour",
  profession: "Student",
};

for (const key in obj) {
  console.log(key, ":", obj[key]);
  //   console.log(key + ":" + obj[key]);
}

// * 3. for of loop
for (const c of "Keshav") {
  console.log(c);
}

// * while loop
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// * do-while loop
let k = 10;
do {
  console.log(k);
  k++;
} while (k <= 5);
