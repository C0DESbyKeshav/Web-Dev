// * Wrong solution (Reason- Limited thinking):
let colors = ["red", "green", "blue", "orange", "grey"];
let bg = ["pink", "yellow", "gold", "aqua", "silver"];

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.color = colors[Math.floor(Math.random() * 5)];
  e.style.backgroundColor = bg[Math.floor(Math.random() * 5)];
});

// * Expected Method:
// console.log("Script.js initializing")
// // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })
