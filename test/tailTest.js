const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Test Case 1: Check to see if it removes head
let result = tail(["Hi", "Eat", "Food", "Now"]);
assertEqual(result.length, 3);
assertEqual(result[0], "Eat");
assertEqual(result[2], "Now");

//Test Case 2: Check original array
let words = ['test', 'ahhh', 'nice'];
tail(words);
assertEqual(words.length, 3);