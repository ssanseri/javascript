function addingMachine() {
	// initialize the total we'll be returning
	var total = 0;

	for (var i = 0; i < arguments.length; i += 1) {
	    var number = arguments[i];

	    // check if the argument is a number,
	    // if so, add it to the running total
	    if (typeof number === 'number') {
	        total += number;
	    }
	}

	// done - return the total
	return total;
}