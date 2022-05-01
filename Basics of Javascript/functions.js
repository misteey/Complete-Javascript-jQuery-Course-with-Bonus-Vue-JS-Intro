// creating the function

function sum_numbers() {
  var num1 = 5;
  var num2 = 2;
  var sum = num1 + num2;
  console.log(sum);
}

// the function is only executed after being invoked:

sum_numbers(); // the console will show 7
 
// function arguments

function sum_args(num1,num2) {
  var sum = num1 + num2;
  console.log(sum);
}

// now when invoking the function we can use any numbers we want:

sum_args(10,25); // the console will show 35
sum_args(1000,375); // the console will show 1375
sum_args(-2,47); // the console will show 45

// the return statement

function sum_args(num1,num2) {
  sum = num1 + num2;
  return sum;
}

console.log( sum_args(10,25) );

var average = sum_args(10,25) / 2;
console.log( average );

document.getElementById("sum_result").innerHTML = sum_args(-27,55);
