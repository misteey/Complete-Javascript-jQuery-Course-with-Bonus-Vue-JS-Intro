20 > 2; // true
2 >= 2; // true
5 < 5; // false
5 <= 10; // true
20 == 20; // true
'john' == 'johnny' // false
'a' == 'A' // false
20 === "20"; // false - same value but different types
20 != 10; // true
10 != 10; // false
"10" != 10; //true - type is different

var orderValue = 2800;

if( orderValue >= 1000 ) {
  console.log("You are eligible for financing your order.");
} else {
  console.log("finance options are not available for orders below US$1000");
}
