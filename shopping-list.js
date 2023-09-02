/* 
You're creating a simple shopping list.
Given a list of items in an array, print each item out
in a message that says 'Buy: [ITEM]'

Example input: ["Chicken", "Juice", "Flour"]

Example output:
Buy: Chicken
Buy: Juice
Buy: Flour
*/

//items:
const items = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

//add your code below this line, include comments describing each line
for (let i = 0; i < items.length; i++) {
    console.log("Buy: " + items[i]);
}