/* Rules for choosing variable names:
1. Letters, digits, underscores and $ signs are allowed.
2. Name must begin with a $, _ or a letter.
3. JavaScript reserved words cannot be used as a variable name.
4. Case sensitive.
*/

/* 'var' vs 'let' in JS:
1. 'var' is globally scoped while 'let' and 'const' are block scoped.
2. 'var' can be updated and redeclared within its scope.
3. 'let' can be updated but not redeclared.
4. 'const' can neither be updated nor be redeclared.
5. 'const' must be initialized during declaration unlike 'let' and 'var'.
*/

/* Primitive Data Types - Basic DT:
Null, Number, String, Symbol, Undefined, Boolean, BigInt*/

//  Object:
const item = {
    name: "ice-cream",
    "taste flavour": "sweet",
    isTasty : true
};

console.log(item);
item.price = 200;
console.log(item);

//* You can know the type of any variable by using 'typeof var_name' keyword.
//* Type of 'Null' is 'object'

