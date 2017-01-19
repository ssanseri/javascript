// animate a string by rotating it to the right by taking last 
// character of the string and prepending it to the beginning.
// rotate one character every 10th of a second by delaying 100 ms
// between rotations.

function animate_string(id)
{
	var element = document.getElementById(id);
	var textNode = element.childNodes[0]; // assuming no other children
	var text = textNode.data;
	
	setInterval(function () {
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		textNode.data = text;
	}, 100);
}


 


