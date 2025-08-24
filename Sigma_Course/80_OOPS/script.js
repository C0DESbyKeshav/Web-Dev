obj = {
  name: "Keshav",
  rank: 1,
};
console.log(obj);

// JS objects have a special property called prototype that is either null or references another object.
// When we try to read a property from a prototype and its missing, JS automatically takes it from the prototype.
// * This is called as "Prototypal Inheritance".
let animal = {
  eats: true,
  legs: true,
};
let dog = {
  sound: "barks",
};
// Setting a prototype:
dog.__proto__ = animal; // sets dog.[[Prototype]] = animal
// If we have a method in object, it will be called from the object.
// If its missing in object and present in prototype, its called from the prototype.

// * Class is the blueprint and objects are created based on that blueprint template
class Animal {
  constructor(name) {
    this.name = name;
    console.log("The object is created.");
  }
  eats() {
    console.log("I can eat.");
  }
  smells() {
    console.log("I can smell.");
  }
  runs() {
    console.log("I can run.");
  }
  jumps() {
    console.log("I can jump.");
  }
}

class Lion extends Animal {
  constructor(name) {
    // When we override a method, we don't want the method of the previous class to go in vain.
    // We can execute it using super keyword.
    super(name);
    console.log("The object is created and he is my lion friend.");
  }

  // * Method Overriding:
  // If we create our own implementation of runs(), it will not be taken from the Animal class. This is called Method Overriding.
  runs() {
    super.eats();
    // By writing this, both the classes eats() function will be called on calling the eats() of class Lion.
    console.log("Sheru tere peeche pada hai.");
  }
}

let obj1 = new Animal("Zoro");
console.log(obj1);

let obj2 = new Lion("Sherkhan");
console.log(obj2);
console.log(obj2.runs());

// * Static methods:
// Static methods are used to implement functions that belong to a class as a whole and not to any particular object.
// We can assign a static method as follows:
class Employee {
  static sMethod() {
    alert("Hello");
  }
}

let obj3 = new Employee();
// console.log(obj3.sMethod());
// We can't call the static method through any object because static methods aren't available for individual objects so, we call it directly through the class.
console.log(Employee.sMethod());

// * instanceof operator:
// The instanceof operator allows to check whether an object belongs to a certain class. The syntax is:
// objName instanceof className
// It returns true if object belongs to the class or any other class inheriting from it.
console.log(obj1 instanceof Animal);
console.log(obj2 instanceof Lion);
console.log(obj2 instanceof Animal);
console.log(obj1 instanceof Lion);
// It simply checks whether obj2 is an object of class Animal and since it is, due to inheritance, it returns true.
