
function convertToC() {
	var f = document.getElementById("number1").value;
	var c = (f-32)/(9/5);
	window.alert(f + " degrees Fahrenheit is " + c + " degrees Celsius.");
    document.getElementById("result").innerHTML = c;
}

function convertToF() {
	var c = document.getElementById("number1").value;
	var f = (c*(9/5))+32;
	window.alert(c + " degrees Celsius is " + f + " degrees Fahrenheit.");
    document.getElementById("result").innerHTML = f;
}


