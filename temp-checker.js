/*
You're building a temperature checker. 
Given an array of temperatures, print a message for each temperature,
indicating whether it's warm or cold (assume warm if temperature is above 60°F).
 
Example input: [55, 80, 23, 77]

Example output:
55 degrees is cold
80 degrees is warm
23 degrees is cold
77 degrees is warm
*/



//the temps
const temperatures = [38, 65, 25, 71, 57];

for ( let i = 0; i < temperatures.length; i++) {
  let temperature = temperatures[i];
  
  if (temperature > 60) {
    console.log("Temperature " + temperature + " " + "degrees is warm.");
  } else {
    console.log("Temperature " + temperature + " " + "degrees is cold.");
  }
}//your code here

//iterate through the array

  //store each temperature in variable

  //use a conditional to check if temperature is above 60

    //if it is, print out message indicating it is warm

    //if not, print out message indicating is is cold