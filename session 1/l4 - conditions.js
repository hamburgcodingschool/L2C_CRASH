// CONDITIONAL OPERATORS
//
//   ==    !=     >     >=    <      <=

/*var age = 15;
var mininumAge = 18;

if (age >= mininumAge) {
	console.log('HEY! Have a Beer!');
} else {
	console.log('HEY! Have a Fritz!');
}

console.log('END!!!!');*/

var age = 15;
var mininumAge = 18;

var drink;

if (age >= mininumAge) {
  drink = "Beer";
} else {
  drink = "Fritz";
}

console.log("Hey! Have a " + drink + "!");
console.log('END!!!!');