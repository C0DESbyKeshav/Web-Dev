let a = document.querySelector(".container");
let b = document.querySelector(".box");
console.log(a);
console.log(b);

console.log(a.innerHTML);
b.innerHTML = "I am a wooden box";
console.log(b.innerHTML);

console.log(a.innerText);
console.log(b.innerText);

console.log(a.outerText);
console.log(b.outerText);

console.log(a.tagName); // only exists for element node.
console.log(b.nodeName); // defined for any node (text, comment, etc).
console.log(a.textContent);

console.log(a.hidden);
// a.hidden = true; // container ko hidden attribute laga dega.
console.log(a.hidden);

console.log(a.attributes);
console.log(b.hasAttribute("style"));
// returns false if there is no style attribute in .box
console.log(b.getAttribute("style"));
console.log(b.setAttribute("style", "display: grid"));
console.log(b.removeAttribute("style"));

document.designMode = "off";
// By writing this, we can now change the contents of the webpage.

//* data-* attributes
// We can always create custom attributes but the ones starting with "data-" are reserved for programmers use.
// They are available in a property named dataset.
// If an element has an attribute named "data-one", its available as element.dataset.one
console.log(b.dataset);
console.log(b.dataset.createdby);
console.log(b.dataset.pulledby);

// * Creating and Inserting an Element
// Yeh karna tab zaroori padd jaata hai jab kahi aur se data aa raha hai, and I want ki DOM mein page ko bina reload kiye update ho jaaye data, tab JS ke through dynamically element create kar sakte hai.
let divEle = document.createElement("div");
// A new element "div" is created and this state is stored in a variable named 'divEle.
divEle.className = "create";
// The new element 'div' has been assigned a class.
divEle.setAttribute("id-assign", "value");
// The new element "div" has been assigned an attribute.
console.log(divEle.getAttribute("id-assign"));
// To print the presence of "id-assign" attribute on the browser console.
divEle.innerHTML = "I have been inserted <b>by Keshav</b>";
// Assigning some content inside the 'div' element.
document.querySelector(".container").append(divEle);
// To finally insert/append the "div" element inside the .container as its last element.
console.log(a.innerHTML);
// A proof that the "div" element actually got appended.

// * Some more insertion methods
a.append(divEle); // append at the end of the node "container".
a.prepend(divEle); // insert at the beginning of node "container".
a.before(divEle); // insert before node "container".
a.after(divEle); // insert after node "container".
// a.replaceWith(divEle); // replaces node "container" with the given node "div".
// You can check the changes in the elements section in the dev tools.

// * insertAdjacentHTML/Text/Element
// This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the following:
a.insertAdjacentHTML(
  "beforebegin",
  "<p style='display:inline'>This is before </p><b>JavaScript</b><br>"
);
// insert HTML just right before element 'container'.
a.insertAdjacentHTML(
  "afterbegin",
  "<p style='display:inline'>This is after </p><b>JavaScript</b>"
);
// insert HTML into element 'container' at the beginning i.e. the first child of element 'container'.
a.insertAdjacentHTML(
  "beforeend",
  "<p style='display:inline'>This is before end </p><b>JavaScript</b>"
);
// insert HTML into element 'container' at the end.
a.insertAdjacentHTML(
  "afterend",
  "<p style='display:inline'>This is after end </p><b>JavaScript</b>"
);
// insert HTML just right after element 'container'.

// * Node removal
// To remove a node, there's a method node.remove()
b.remove();
// The first element inside box element will get removed.

// * className and classList
// If we assign something to elem.className, it replaces the whole string of classes.
// But often we want to add/remove/toggle a single class.
console.log(document.querySelector(".container").classList); //returns list
// We can also select the .contaner by doing:
console.log(document.getElementsByClassName("container")[0].classList);
console.log(document.querySelector(".container").className); // returns string
// To add a class:
a.classList.add("new");
console.log(a.classList);
// To remove a class:
a.classList.remove("new");
console.log(a.classList);
// Now, toggle a class: to toggle means to switch between the states on/off of its properties/styles.
// eg: if there is a class="green" and I have given it a style=color:green; then when I use this toggle, it will apply the color green and when toggled again, it will stop applying the color green.
console.log(a.classList.toggle("green"));
