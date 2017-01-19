
function multiply() {
	var n1 = document.getElementById("number1").value;
	var n2 = document.getElementById("number2").value;
	window.alert("The product of " + n1 + " by " + n2 + " is " + n1*n2 + ".");
    document.getElementById("result").innerHTML = n1*n2;
}

function divide() {
	var n1 = document.getElementById("number1").value;
	var n2 = document.getElementById("number2").value;
	window.alert("The quotient of " + n1 + " divided by " + n2 + " is " + n1/n2 + ".");
    document.getElementById("result").innerHTML = n1/n2;

	var element = document.getElementById("result");
	var textNode = element.childNodes[0]; // assuming no other children
	var text = textNode.data;
	
	setInterval(function () {
		text = n1/n2;
		textNode.data = text;
	}, 100);
}


