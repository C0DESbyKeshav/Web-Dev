// * Arrays in JS are mutable and can store different types of elements.
let arr = [1, 0, 3, "Keshav", true, 35.25];

arr[1] = 7; // this is valid since arrays in JS are mutable
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[2]);

// * Array Methods:
console.log(arr.toString());
console.log(arr.join(" - "));
console.log(arr.pop()); // removes last element from the array and returns it.
console.log(arr.push(null)); // adds element at the end and returns the new array length.
console.log(arr);
console.log(arr.shift()); // removes first element and returns it.
console.log(arr.unshift(77)); // adds element to the beginning and returns new array length.
delete arr[2]; // is an operator; the element at the second index get deleted but the empty position remains.
console.log(arr);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 60, 7];
let arr3 = [8, 9];
console.log(arr1.concat(arr2, arr3)); // does'nt change the existing ones, new array is created.

let array = ["Mandal", "Keshav", 2, 7, 0, 1, 6];
array.sort(); // modifies the original array.
console.log(array);

array.splice(2, 1, 25, 35, 45); // can be used to add and delete items to/from the array at any specific position and returns the deleted number(s).
/* first number: index position to start modifying the array.
second number: the number of elements to delete from that index position.
third number and rest: the elements to add to the array. */
console.log(array);

console.log(array.slice(2, 4)); // slices out a piece of an array without changing the original array.
/* first number:- start: inclusive
second number:- end: exclusive */

console.log(array.reverse());

// * Looping through Arrays
let a = [1, 84, 25, 35, 9];

// forEach function using Arrow function
a.forEach((value, index, array) => {
  console.log(value, index, array);
});

// for-in loop: for objects
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}

// for-of loop: for arrays
let ar = [1, 84, 25, 35, 9];

for (const element of ar) {
  console.log(element);
}

// * Map
// creates a new array by performing some operation on each array element.
ar = [1, 84, 25, 35, 9];
let newAr = [];
/*
for (let i = 0; i < ar.length; i++) {
  const element = ar[i];
  newAr.push(element ** 2);
}
*/
// But there is a better way to do the above thing and i.e. by using maps.

newAr = ar.map((e) => {
  return e ** 2;
});

console.log(newAr);
// Three things can be passed to an arrow function: value, index and array as per the operation we want to perform and the result we want.
// Here, only the value (e) is passed as we just want to square each value of array.
// For single value the brackets can be ignored but If more than one arguments are used then don't forget to use the brackets. e.g.: ar.map((e, index, array)=>{});

// * Filter
// Filters an array with values that passes a test. Creates a new array.
ar = [1, 84, 25, 35, 9];
const greaterThanSeven = (e) => {
  if (e > 7) return true;
  return false;
};
console.log(ar.filter(greaterThanSeven));
// greaterThanSeven is a function jismein humlog return state store kar rahe hai for the condition if array ka element is greater than 7 or not and filters it out.

// * Reduce
// Reduces an array to a single value.
ar = [1, 84, 25, 35, 9];
const mul = (a, b) => {
  return a * b;
};
// mul is just a simple arrow function that simply returns the multiplication product of two numbers passed to it.
console.log(ar.reduce(mul));
// reduce function will apply the mul function on each individual element with the next individual element of the array ar.
// just like - reduce function array ar ke saare elements ka factorial nikal raha ho.
// 1 * 84 = 84
// 84 * 25 = 2100
// 2100 * 35 = 73500
// 73500 * 9 = 661500

// * Array.from
// converts something into array
console.log(Array.from("Keshav"));
// converts string "Keshav" into array elements.

// * for....of
// for-of loop can be used to get the values from an array.

// * for....in
// for-in loop can be used to get the keys from an array. 
