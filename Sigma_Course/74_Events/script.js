let button = document.getElementById("btn");

// * MOUSE EVENTS
// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Single Click
button.addEventListener("click", () => {
  document.querySelector(".box").textContent = "Single Click";
});

// Double Click
button.addEventListener("dblclick", () => {
  document.querySelector(".box").textContent = "Double Click";
});

// Context Menu
button.addEventListener("contextmenu", () => {
  document.querySelector(".box").textContent = "Context Menu";
});

// Mouse Enter
// button.addEventListener("mouseenter", () => {
//   document.querySelector(".box").textContent = "Mouse Enter";
// });

// Mouse Leave
button.addEventListener("mouseleave", () => {
  document.querySelector(".box").textContent = "Mouse Leave";
});
// And many more...

// * KEYBOARD EVENTS
// List of all Keyboard Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events

// Key Down
document.addEventListener("keydown", (e) => {
  document.querySelector(".box").textContent = "Key Down";
  console.log(e, e.key, e.keyCode);
  // Fired when a key is pressed.
});

// Key Press
document.addEventListener("keypress", (e) => {
  document.querySelector(".box").textContent = "Key Press";
  console.log(e, e.key, e.keyCode);
  // Fired when a key that produces a character value is pressed down.
});

// Key Press
document.addEventListener("keyup", (e) => {
  document.querySelector(".box").textContent = "Key Up";
  console.log(e, e.key, e.keyCode);
  // Fired when a key is released.
});

// * There are also form events- submit, focus in/out.

// * Adding and Removing Event Listeners:
const handler = () => {
  document.querySelector(".box").textContent = "Mouse Enter";
};

button.addEventListener("mouseenter", handler);
button.removeEventListener("mouseenter", handler);
