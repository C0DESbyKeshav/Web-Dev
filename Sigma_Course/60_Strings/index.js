let name = "Keshav";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

//* Template Literals
console.log(`My name is "${name}" which contains ${name.length} characters.`);
// When we insert variables directly in template literal, it is called string interpolation.

// * Escape Sequence Characters
let a = `You must "WorkHard" while you 'Still' can !!`; // Recommended
console.log(a);
let b = "You must \"WorkHard\" while you 'Still' can !!";
console.log(b);

console.log("New\nLine");
console.log("Horizontal\tTab");

let x = "Ghost";
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.length); // it's a property and not a function
console.log(x.slice(1, 3));
console.log(x.replace("host", "uts"));
console.log(x.concat(name, "Luffy", "Zoro")); // creates a new string as, strings in js are immutable.
console.log(x.charAt(3));
console.log(x.indexOf("ho"));
console.log(x.startsWith("Gh"));
console.log(x.endsWith("t"));
let y = "   Her ";
console.log(y.trim()); // removes all the whitespace

// NOTE: STRINGS ARE IMMUTABLE.
