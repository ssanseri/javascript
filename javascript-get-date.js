function pad(num, size) {
	var s = "000000000" + num;
	return s.substr(s.length-size);
}

var today = new Date();  
console.log(pad(today.getMonth()+1,2) + '-' + pad(today.getDate(),2) + '-' + pad(today.getFullYear(),4)); 
document.writeln(pad(today.getMonth()+1,2) + '-' + pad(today.getDate(),2) + '-' + pad(today.getFullYear(),4)); 


 


