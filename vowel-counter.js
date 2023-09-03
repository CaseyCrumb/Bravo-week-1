/*
You're going to build a vowel counter. 
Given a string, count and print out the number of vowels in the string. 
For the purpose of this assignment, we will not consider y to be a vowel.
 
Example input: "Do you know where the mall is, Ellie?"

Example output:
Number of vowels: 12

*/

//HINT: The string 'aeiou' has been provided for you if you 
//think it might be helpful. You might want to look into what
//the 'includes' method does and how it might be useful here.

const text = "Hello, how are you today? Enjoy your stay!";
const vowels = "aeiou";

//add your code below
function countVowels(text) {
    text = text.toLowerCase();
    let vowelCount = 0;
    for (let i = 0; i < text.length; i++) {
        let vowel = text[i];
        //simpler way to do this would be
        //if (vowels.includes(vowel)) {
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
            vowelCount++
        }
    }
    console.log(`The number of vowels in this string: ${vowelCount}`);
}

//test
countVowels(text);