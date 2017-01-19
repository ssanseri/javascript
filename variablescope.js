var myNum = 32;
var myResult = 'Success';

function randomizer(limit) {
	
	var myNum = Math.floor(Math.random() * limit);

	console.log('myNum is ' + myNum);
	console.log('Global myNum is ' + window.myNum);

	return myNum;
}


function randomizer2(limit) {
	
	myNum = Math.floor(Math.random() * limit);

	console.log('myNum is ' + myNum);
	console.log('Global myNum is ' + window.myNum);

	return myNum;
}
