// iterate over an array

for (var i = 2014; i <= 2050; i++) {
	newYear = new Date(i,0,1,0,0,0,0);
	//console.log(newYear);
	if (newYear.getDay() === 0)
		console.log("January 1, " + i + " is a Sunday");
	//else
	//	console.log("January 1, " + i + " is not a Sunday");
}