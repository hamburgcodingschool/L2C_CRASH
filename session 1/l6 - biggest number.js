var a = parseInt(window.prompt('What is the first number?'));
var b = parseInt(window.prompt('What is the second number?'));
var c = parseInt(window.prompt('What is the third number?'));

if (a > b) {
	if (a > c) {
		console.log('The biggest is ' + a);
	} else {
		console.log('The biggest is ' + c);
	}
} else {
  if (b > c) {
		console.log('The biggest is ' + b);
	} else {
		console.log('The biggest is ' + c);
	}
}
