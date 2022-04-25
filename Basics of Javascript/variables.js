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
