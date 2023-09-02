/*
You're building a simple greeting generator. 
Given a list of names in an array, print a personalized greeting for each name.
*/

//the names
const names = ["Alice", "Charlie", "Diego", "Eve", "Fiona", "Hassan", "Isabel", "Javier"];


//iterate through the names array
for (let i = 0; i < names.length; i++) {
//store the current name in a variable
    let currentName = names[i];//your code here

  //log out a greeting using string interpolation
  console.log(`Hello, ${currentName}!`);//your code here
  
}