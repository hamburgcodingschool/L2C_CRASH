// TIMES TABLE

var number = parseInt(window.prompt("Whats the number?"));

var counter = 0;

while(counter < 10) {
  counter++;
  
  var res = number * counter;
 
  console.log(number + " X " + counter + " = " + res);
}
