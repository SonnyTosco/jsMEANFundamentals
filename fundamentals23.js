// Fundamentals 2

//Create a simple for loop that sums all the integers between x and y (inclusive).
//Console log the final sum
// var x;
// var y;
// var sum;
// function(x,y){
//   for(var x; x<y; x++){
//     sum+=x
//   }
// }
// console.log(sum);

// Write a loop that will go through an array, find the min, and return it.
// var min;
// function(arr){
//   for(var i = 0; i<arr.length; i++){
//     arr[0]=min;
//     if(arr[i]<min){
//       arr[i] = min;
//     }
//   }
//   return min;
// }

// Write a loop that will go through an array, find the average of all the values, and return it.
// var sum;
// var average = sum/arr.length;
// function(arr){
//   for(var i = 0; i<arr.length-1; i++){
//     sum+=arr[i];
//   }
//   return average;
// }

var person = {
  name : "Sonny",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking`);
    person.distance_traveled += 3;
  },
  run : function(){
    console.log(`${person.name} is running`);
    person.distance_traveled += 10;
  },
  crawl : function(){
    console.log(`${person.name} is crawling`);
    person.distance_traveled += 1;
  }
}

function personConstructor(name, cohort) {
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if(ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel]
  return ninja;
}

var ninjaFlex = personConstructor("Paul Wall", "July")
console.log(ninjaFlex);
ninjaFlex.levelUp().levelUp()
console.log(ninjaFlex);
