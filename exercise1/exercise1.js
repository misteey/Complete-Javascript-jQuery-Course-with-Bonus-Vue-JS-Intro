// task 1
console.log("This is ex1.js");

// task 2
var firstName = "Ana";
var lastName = "mistee";
var currentYear = "2022";
var yearOfBirth = "2002";

var age = (parseInt(currentYear) - parseInt(yearOfBirth));

var aboutMe = "Hi, my name is " + firstName + " " + lastName + ". I'm " + age + " years old and I'm learning JavaScript.";
document.getElementById("student_message").innerHTML = aboutMe;

// task 3
var num1 = document.getElementById("num_1").innerHTML;
var num2 = document.getElementById("num_2").innerHTML;
var average = ((parseInt(num1) + parseInt(num2)) / 2).toFixed(2);

document.getElementById("result").innerHTML = average;

// task 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

convert(phone1);
convert(phone2);
convert(phone3);
 
function convert(number) {
    if (typeof number !== "string") {
        number = String(number);
    }
    if (number.length === 9) {
        console.log("valid number")
    } else {
        console.log("invalid number");
    }
}

// task 5
console.log(Math.pow(32,6))

// task 6
var NAME; // valid
var $num1; // valid
var typeof; // invalid, typeof is an operator 
var first-name; // invalid, it has a dash (only underscores are allowed)
var attempt_2; // valid
var 2ndAttempt; // invalid, variables can't start with numbers
var full name; // invalid, contains a white space

// task 7
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); // 2525
console.log( (7+5) / number + 2 ); // 4
console.log(pressure); // undefined
console.log(temperature); // null
console.log(typeof pressure); // undefined
console.log(typeof temperature); // object

// task 8
var url_1 = document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = "https://" + url_1;
 
var url_3 = document .getElementById("url_3").innerHTML;
document.getElementById("url_4").innerHTML = url_3.replace("https://", "");
