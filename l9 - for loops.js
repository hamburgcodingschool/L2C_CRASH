// LOOPS
//
// for

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("TIMES TABLE!!!!");

var number = parseInt(window.prompt("Whats the number?"));
for (var i = 1; i <= 10; i++) {
  var res = number * i;
  console.log(number + " X " + i + " = " + res);  
}