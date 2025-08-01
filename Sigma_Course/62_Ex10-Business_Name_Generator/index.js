/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let adj = { 0: "Crazy", 1: "Amazing", 2: "Fire" };
let shop = { 0: "Engine", 1: "Foods", 2: "Garments" };
let word = { 0: "Bros", 1: "Limited", 2: "Hub" };
let business_name = "";

business_name += adj[Math.floor(Math.random() * 3)] + " ";
business_name += shop[Math.floor(Math.random() * 3)] + " ";
business_name += word[Math.floor(Math.random() * 3)];

console.log(business_name);
