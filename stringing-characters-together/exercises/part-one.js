let num = 1001;
let num_length = num.toString();


let decimalValue = 123.45;
let decimalLength = decimalValue.toString();


//Returns 'undefined'.
console.log(num.length);


//Use type conversion to print the length (number of digits) of an integer.

console.log(num_length.length);


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

console.log(decimalLength.length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes(".")) {
    console.log(String(num).length-1);
} else 
    console.log(String(num).length);