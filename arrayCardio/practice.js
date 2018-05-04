// reverse a string
var s ="1,2,3,4";
var splitString = s.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log (joinArray);

// reverse a string without abstraction
function reverseString(s){
  var newString = "";
  for (var i = s.length-1; i>=0; i--){
    newString += s[i];
  }return newString;
}reverseString("hello");

// get a character out of a string
var anyString = "Brave new world";
console.log(anyString.charAt(0));
console.log(anyString.charAt(5));

// factorial
n! = n *(n-1)!

// fibonacci recursive solution
function fib(n){
  if (n<=0){
    return 0;
  }else if (n===1){
    return 1;
  }else{
    return fib(n-1)+fib(n-2);
  }
}
fib (9);

// remove duplicates from array
var nums = [1,2,2,2,2,3,4];
var newNums = Array.from(new Set (nums)); 

// can't get either of these to work
var nums =[1,2,3,4,5,5,5,6];
var newNums = (newSet(nums));
console.log(Array.from(newNums));