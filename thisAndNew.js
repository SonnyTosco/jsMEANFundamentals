//This and New

// function NinjaConstructor(name, prevOccupation) {
//   this.name = name;
//   this.prevOccupation = prevOccupation
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//   }
// }
// var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
// console.log(this);
// //after var dylan ... add:
// var nikki = NinjaConstructor('Nikki','Historian');

//Private Methods and Variables

// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method");
//   }
//   // PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod(); // this works since it is a scope that can access privateMethod!
//     console.log(privateVar);      // this works too!
//   }
// }
// var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
// // Pariece.privateMethod();
// // or this:
// // privateMethod();
// // or this:
// // Pariece.privateVar;
// None of the above functions work on purpose

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log(self);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();

// Print out
// Hi my name is Speros. I used to be a MBA and now I'm a Ninja!
// this is a private method for Speros
// Ninja {
//   name: 'Speros',
//   age: 24,
//   prevOccupation: 'MBA',
//   introduce: [Function] }
// This is a private variable
