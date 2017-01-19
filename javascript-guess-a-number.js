
randomNumber = Math.floor((Math.random() * 10) + 1);
window.alert("Psst, the number is " + randomNumber);
guess = parseInt(window.prompt("Guess a number between 1 and 10 : ")); 
if (guess === randomNumber) {
	document.writeln("Good Work");
	window.alert("Good Work");
	console.log("Good Work");
} else {
	document.writeln("Not matched");
	window.alert("Not Matched");
	console.log("Not Matched");
}

