//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let slice1 = language.slice(0,1);
let slice2 = language.slice(4,5);
let printJS = slice1.concat(slice2);
console.log(printJS);


//2. Without using slice(), use method chaining to accomplish the same thing.

let language2 = language.split(',').toString();
let result2 = language2[0] + language2[4];
console.log(result2);


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${language} is ${printJS}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let quoteDay = "Believe you can and you're halfway there";
console.log(quoteDay.toUpperCase().toLowerCase().split(""));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let newCase = notTitleCase.split("");

newCase.splice(0, 1, "T");
newCase.splice(-4, 1, "C");



let result = newCase.join("");
console.log(result);


