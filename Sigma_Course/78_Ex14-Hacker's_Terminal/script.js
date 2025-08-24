// A function to display the messages one after another after a random interval of 1 to 7.
function delay() {
  return new Promise((resolve, reject) => {
    const timeout = (1 + Math.floor(Math.random() * 7)) * 1000;
    // RandomInteger = min + Math.floor(Math.random() * (max - min + 1));
    // min = 1, max = 7
    // The random number obtained is multiplied by 1000 because we want the time in milliseconds (1s = 1000ms) as the second parameter of setTimeout() function.

    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

async function hackingSimulator() {
  // An array of messages which is to be displayed on the screen.
  const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  // For the blinking dots effect:
  const blink = setInterval(() => {
    const last = document.body.lastElementChild;
    if (last) {
      if (last.textContent.endsWith("...")) {
        last.textContent = last.textContent.slice(0, -3);
      } else {
        last.textContent = last.textContent + ".";
      }
    }
  }, 300);

  for (const msg of messages) {
    await delay();
    let div = document.createElement("div");
    div.textContent = msg;
    document.body.append(div);
  }

  await delay();
  clearInterval(blink);
}
hackingSimulator();

// * PROGRAM EXPLANTION:
// * Approach:
// Since we have to use async, await, setInterval and setTimeout concepts to obtain the desired output, the hints are:
// async/await for the asynchrounous parts - to obtain the messages one by one only when desired (i.e. after a delay)
// setInterval, clearInterval(time) - to get the dots blinking effect, repeating itself after every specified interval.
// setTimeout, clearTimeout(time) - to get the messages one by one after a specified time delay.

// * What does .slice(0, -3) mean?
// Index :  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
// Char  :  I n i t i a l i z i  n  g     H  a  c  k  i  n  g  .  .  .
// Start = 0 → begin at index 0 (include the I).
// End = -3 → means length - 3 = 23 - 3 = 20.
// So stop just before index 20.
// So we keep characters from index 0 → 19.
// Indexes 20, 21, 22 (the three dots) are excluded.

// * .lastElementChild
// .lastElementChild → grabs the last child element inside <body> (ignores text nodes, comments, etc).

//*  Random Number b/w two numbers generation formula:
// RandomInteger = min + floor(rand() * (max - min + 1));
// RandomFloat = min + rand() * (max − min);
// Its actually Math.floor() and Math.random() function.

// * const variable
// Why timeout variable is declared constant ?
// const means: the variable cannot be reassigned to something else.
// But! It does NOT mean the value must be constant at compile-time — it just means once you assign it, you cannot change it in the program further.

//  Simple analogy:
// Use const when the variable is assigned once and never changes.
// Use let when the variable might change.
// So in delay(), timeout is just a one-time calculation → const is the cleanest choice.

// * NodeList
// document.querySelectorAll(".dots") returns a NodeList (like an array of elements), not a single element.
// A NodeList doesn’t have a style property.
