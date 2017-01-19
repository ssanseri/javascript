function fuddify(speech) {
	// if it's not a string, return an error message
	if (typeof speech !== 'string') return "Nice twy, wabbit!";

	// otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w');
	speech = speech.replace(/R/g, 'W');
	return speech;
}




function isOdd(num) {
	if (num % 2 === 0) {
		return false;
	} else {
		return true;
	}
}