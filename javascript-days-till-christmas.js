var num = window.prompt("test of prompts: ")
window.alert("test value is " + num);

var dateString = window.prompt("What date do you want to check from Christmas?");
var date = new Date(dateString);
var daysTillChristmas = 0;

do {
    if (date.getMonth() === 12-1 && date.getDate() === 25) {
	    window.alert(daysTillChristmas + " days till Christmas");
		break;
    }
	date.setDate(date.getDate() + 1);
	daysTillChristmas++;
} while (true);

