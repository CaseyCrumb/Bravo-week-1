//Additional exercises to practice functions

//1. Create a function named "calculate" that takes three parameters: 
//two numbers and a string representing an arithmetic operation (+, -, *, /). 
//The function should perform the specified operation on the two numbers and return the result.

//function signature
function calculate(num1, num2, operator) {
    if (operator == "+") {
      return num1 + num2; 
    }   
    else if (operator == "-") {
      return num1 - num2;
    } 
    else if (operator == "*") {
      return num1 * num2;
    } 
    else if (operator == "/") {
      return num1 / num2;
    }
}

//Test: Uncomment the following four lines before running your code. Verify the results.
 //console.log(calculate(10, 5, '+') == 15) //true
 //console.log(calculate(100, 4, '/') == 20) //false
 //console.log(calculate(-5, -10, '-') == 5) //true
 //console.log(calculate(5, 0, "*") == 5) //false

 //2. Create a function named "reverseString" that takes two parameters:
//a string containing only letters and spaces (no punctuation or special characters),
//and a boolean indicating whether or not you should preserve capitalization
//and returns a reversed version of that string

function reverseString(myString, presCap) {
  if (!presCap) {
    myString = myString.toLowerCase();//converts string to lowercase and resaves as myString.
  } 

  let reversedString = ""; //'arcs'
//with loops often helpful to think about the middle step rather than the first or last steps
  for ( let i = 0; i < myString.length; i++) {
    let letter = myString.charAt(i);
    reversedString = letter + reversedString; //"b" + "arcs" -> "barcs"
    // reversedString  = myString.charAt(i) + reversedString; //could be done with one line
  }

  return reversedString;
}

/*
originals string: sxxxxxxx = scrabble
*/


//Test: Uncomment the following three lines before running your code. Verify the results.
//console.log(reverseString("Alan Turing", true) == "gniruT nalA"); //true
//console.log(reverseString("California", false) == "ainrofilac"); //true
//console.log(reverseString("Racecar", true) == "racecar"); //false

//3. Write a function named "isPalindrome" that takes a string as input 
//and returns true if the string is a palindrome (reads the same forwards and backwards), 
//and false otherwise. You can assume your string will only contain letters and spaces.
//You can ignore capitalization (e.g. "Racecar" should be considered a palindrome)
//and also ignore spaces (e.g. "taco cat" should be considered a palindrome).
//Consider how your reverseString function above can be used!

function isPalindrome(myString){
 myString = myString.toLowerCase().replaceAll(" ", "");

 let myStringReverse = reverseString(myString);
 if (myStringReverse == myString) {
   return true;
 }  else {
   return false;
 }
}






//Test: Uncomment the following four lines before running your code. Verify the results.
console.log(isPalindrome("Racecar") == true); //true
console.log(isPalindrome("madam") == true); //true
console.log(isPalindrome("hello") == false); //true
console.log(isPalindrome("A man a plan a canal Panama") == true); //true