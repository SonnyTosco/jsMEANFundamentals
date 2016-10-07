//1
// mean();
// console.log(food);
// var mean = function(){
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// }
// console.log(food);

//Predicted output: undefined and fish since food is undefined in the above function and fish was the last thing it was set to
//Actual Output: error since mean was first

//2
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind(){
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

//Predicted Output: error since genre was undefined
// Actual output: undefined, rock, r&b, disco. Ask if this is the rationale;
// since genre started as undefined it was logged as such. next came rock because
// we called the rewind(), then r&b because it was next in the function. Lastly
// disco because its a global var

//3
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn(){
//   dojo = "seattle";
//   console.log(dojo)
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);
// Predicted Output: san jose, seattle, burbank, san jose
// Actual output: correct. Rationale;
// San jose was the first value that var dojo was defined as . Learn() was called
// and printed seattle, burbank. Since san jose is global it ended with san jose

//4
// console.log(hello);
// var hello = 'world';

// Predicted: undefined
//Actual: correct

//5
// var needle = 'haystack';
// test();
// function test(){
//   var needle = 'magnet';
//   console.log(needle);
// }
//Predicted: will print out magnet since haystack wasn't called in the function test
//Actual: correct

//6
var brendan = 'super cool';
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

//Predicted: super cool because it's calling the global var, not the one in the function
//Actual: correct
