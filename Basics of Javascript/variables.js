var user_name = "guest user";

// console.log(user_name);

document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

var firstName = "John";
cosnole.log( typeof firstName );  // the result will be "string"

var age = 40;
console.log( typeof age );  // the result will be "number"

var firstName = "John";
console.log(firstName.length); // the result will be 4
console.log(firstName[0]); // The result will be "J"

var url = "https://www.udemy.com";
console.log( url.replace( "https://" , "") ); // it will show "www.udemy.com"

var birthYear = 1997;
var price = 16.99;  // decimal places must be separated by a dot
var temperature = -5;

var bigNumber = 2e45;
/* large numbers can be represented by the exponential notation
// this example means 2*10^45 */

var num1 = 20;
var num2 = 3;

var sum = num1 + num2;
var subtraction = num1 - num2;
var division = num1 / num2;
var multiplication = num1 * num2;

var average = (num1 + num2) / 2;

var power = Math.pow(2,4); // this does 2^4, which is 16
var roundedNumber = Math.round(2.7); // rounds to the nearest integer, so 3
var roundUp = Math.ceil(4.3); // rounds to the next integer, so 5
var roundDown = Math.floor(4.6); // rounds to the current integer, so 4
var squareRoot = Math.sqrt(36); // square root, so 6
var randomNumber = Math.random(); // the result is a random number between 0 and 1
var randomNumber = Math.random() * 100; // the result is a random number between 0 and 100

var myNumber = 3.78633;
console.log( myNumber.toFixed(2) ); // will show 3.79
console.log( myNumber.toFixed(4) ); // will show 3.7863

var sales = 20;
sales+= 5;
console.log(sales); // the result will be 25

var name = "Ivan";
name += " ";
name += "Doe";
console.log(name); // the console will show Ivan Doe

var firstNumber = "21";
var secondNumber = "4";
console.log(firstNumber+ secondNumber); // the result will be 214

// to convert strings to numbers we can use parseInt (for integers) or parseFloat (for numbers with decimals) functions

var firstNumber = "21";
var secondNumber = "4";
console.log( parseInt(firstNumber) + parseInt(secondNumber) );  // the result will be 25

// to do the opposite we can use the toString method

var yearOfBirth = 1986;
console.log( yearOfBirth.toString() + " is the year I was born" );
