//Create a function that takes in one parameter called "name" and returns an object
// that looks similar to the person object from JS Fundamentals Part II.

function personConstructor(name) {
  name = name,
  distance_traveled = 0,
  say_name = function(){
    console.log(`${name.name}`);
  },
  say_something = function(phrase){
    console.log(`${name.name} says ${phrase}`);
  },
  walk = function(){
    console.log(`${name.name} is walking`);
    name.distance_traveled += 3;
  },
  run = function(){
    console.log(`{name.name} is running`);
    name.distance_traveled += 10;
  },
  crawl = function(){
    console.log(`{name.name} is crawling`);
    name.distance_traveled += 1;
  }
}
var Sonny = personConstructor("Sonny")
Sonny.say_something("Test");
