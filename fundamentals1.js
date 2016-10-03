//Fundamentals Pt 1

//Go thru each value in the array x , where array = [3,5,'Dojo','rocks','Michael','Sensei'].
//Log each value
var x = [3,5,'Dojo','rocks','Michael','Sensei'];
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

//add a new value using the push method
x.push(100);
console.log(x)

//add a new array ["hello", "world", "Javascript is fun"] to variable x.
x.push(["hello", "world", "Javascript is fun"]);
console.log(x)

//create a for loop that sums all of the numbers between 1 and 500
var sum = 0;
for (var i = 0; i<501; i++) {
  sum+=i;
}
console.log(sum)

//write a loop that will go thru the array [1,5,90,25,-3,0]. Find the min value then print
var x = [1,5,90,25,-3,0];
var min = 0;
for (var i = 0; i<x.length-1; i++)
  if(x[i] < min){
    min = x[i];
  }
console.log(min);

//write a loop that will go thru the array [1,5,90,25,-3,0], find the avg and print.
var arr = [1,5,90,25,-3,0];
var length = 0;
var sum = 0;
for(var i = 0; i<arr.length; i++){
  sum+=arr[i];
  length+=1;
}
console.log(sum/length);

//Write a for-in loop that will navigate through the object below (or write your own object):
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in new_ninja) {
  if(new_ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(new_ninja[key]);
  }
}
