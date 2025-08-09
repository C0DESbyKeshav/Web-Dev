let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor = "yellow";

document.getElementById("mid-box").style.fontSize = "2rem";

document.querySelector(".box").style.color = "red";
// Box1 pe apply hoga, not on all boxes.

// But if we want to set a style for all the .box class out there then:
// * document.querySelectorAll(".box").style.fontWeight = 500;
// This will throw an error as we can't apply style to an array/list of elements.
// CSS properties can only be set for a single element.
// So, to achieve it, we have to use forEach loop.
document.querySelectorAll(".box").forEach((e) => {
  // console.log(e);
  e.style.fontWeight = "bold";
});

let elem = document.getElementsByTagName("div");
// This will return the HTML Collection of all the divs in the entire body section.

// * matches, closest and contains methods
// These are three important methods to search the DOM.
// * 1. elem.matches(css): To check if element matches the given css selector.
console.log(elem[3].matches("#mid-box"));

// * 2. elem.closest(css): To look for the nearest ancestor that matches the given CSS-selector, the element itself is also checked.
// Pahile khud ko check karega phir apne parent pe jaayega phir uske bhi parent pe jaayega and so on....
console.log(elem[3].closest(".container"));

// * 3. elemA.contains(elemB): Returns true if elemA is inside elemB (a descendant of elemA) or when elemA == elemB
console.log(document.querySelector(".container").contains(elem[3]));
console.log(document.querySelector(".container").contains(elem[0]));
// true; as it also contains itself.
console.log(document.querySelector(".container").contains("body"));
