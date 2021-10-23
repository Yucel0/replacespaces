# What is this ?

You can combine spaces in textual data with a special character.

Note: Defaults to "-" if second argument is not sent. You can see it in detail in the example below.

# Installation

`npm install replacespaces`

Then..

For Example

const change = require("replacespaces"),
    text = "No Explanation Here",
    specialChar = "+";

console.log(change(text));
console.log(change(text, specialChar));
console.log(change());
