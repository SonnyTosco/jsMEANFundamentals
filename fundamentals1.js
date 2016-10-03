//Fundamentals Pt 1

//Go thru each value in the array x , where array = [3,5,'Dojo','rocks','Michael','Sensei'].
//Log each value
// var x = [3,5,'Dojo','rocks','Michael','Sensei'];
// for (var i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }

//add a new value using the push method
// x.push(100);
// console.log(x)

//add a new array ["hello", "world", "Javascript is fun"] to variable x.
// x.push(["hello", "world", "Javascript is fun"]);
// console.log(x)

//create a for loop that sums all of the numbers between 1 and 500
// var sum = 0;
// for (var i = 0; i<501; i++) {
//   sum+=i;
// }
// console.log(sum)

//write a loop that will go thru the array [1,5,90,25,-3,0]. Find the min value then print
// var x = [1,5,90,25,-3,0];
// var min = 0;
// for (var i = 0; i<x.length-1; i++)
//   if(x[i] < min){
//     min = x[i];
//   }
// console.log(min);

//write a loop that will go thru the array [1,5,90,25,-3,0], find the avg and print.
// var arr = [1,5,90,25,-3,0];
// var length = 0;
// var sum = 0;
// for(var i = 0; i<arr.length; i++){
//   sum+=arr[i];
//   length+=1;
// }
// console.log(sum/length);

//Write a for-in loop that will navigate through the object below (or write your own object):
// var new_ninja = {
//  name: 'Jessica',
//  profession: 'coder',
//  favorite_language: 'JavaScript', //like that's even a question!
//  dojo: 'Dallas'
// }
// for (var key in new_ninja) {
//   if(new_ninja.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(new_ninja[key]);
//   }
// }

// To understand and write JavaScript code effectively, you need to understand how
// the interpreter rearranges your code. For each of the following problems rewrite
// the code to mimic how the interpreter would rearrange it before running.
// After rearranging the code, predict the output.

//Given
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

//Re-arranged
// var first_variable = "Yipee I was first!";
// console.log(first_variable);
// function firstFunc() {
//   var first_variable;
//   console.log(first_variable);
// }
// first_variable = "Not anymore!!!";
// console.log(first_variable);

//Given
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

//Re-arranged
// var food = "Chicken";
// console.log(food);
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
//   console.log(food);
// }
// eat();
// ask Phil if var food needs to be used to redefine the variable food in the function
//to change it to gone.

//Given
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

//Re-arranged
// var new_word;
// new_word = "old";
// function lastFunc() {
//   var new_word = "NEW!";
// }
// console.log(new_word);

//Build some Functions
//Make a function that can be used anywhere in your file and that when invoked
// will console.log('I am running!'); give it the name runningLogger.
// function runningLogger(){
//   console.log('I am running!');
// }
// runningLogger();

//Make a function that is callable, has one parameter and multiplies the value of
// the parameter by 10 before returning the result. Give it the name multiplyByTen.
// Invoke it, passing the argument 5.

// function multiplyByTen(num){
//   result = num*10;
//   return result;
// }
// console.log(multiplyByTen(5));

//Write two functions (stringReturnOne and stringReturnTwo) that each return
// a different hard-coded string.
function stringReturnOne(){
  return 'Haaaa';
}
function stringReturnTwo(){
  return 'Huh';
}
// console.log(stringReturnOne());
// console.log(stringReturnTwo());

// Write a function named caller that has one parameter. If the argument provided
// to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

// function caller(param){
//   if(typeof(param) == 'function'){
//     param();
//   }
// }

//Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed
// to the function are functions, console.log the value that each, when invoked returns.
function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

//Write a function caller2 that has one parameter. It console.log's the string 'starting',
// waits for 2 seconds, and then invokes the argument if the argument is a function.
// (setTimeout may be useful for this one). The function should then console.log 'ending?'
// and return 'Interesting.' Invoke this function by passing it myDoubleConsoleLog.

function caller2(param1){
  console.log('starting')
  var x = setTimeout(function(){
    if(typeof(param1) == 'function'){
      param1(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending?');
  return ('interesting');
}
caller2(myDoubleConsoleLog);
