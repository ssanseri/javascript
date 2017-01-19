function transmogrifier(calvin) {
	if (typeof calvin !== 'object') {
	    console.log('argument is of the wrong type');
	    return;
	}


    var randomNumber = Math.floor(Math.random() * 5) + 1;
    // console.log('random ' + randomNumber);
    switch(randomNumber) {
	case 1:
	    calvin.form = 'tyrannosaurus';
	    break;
	case 2:
	    calvin.form = 'grey wolf';
	    break;
	case 3:
	    calvin.form = 'bengal tiger';
	    break;
	case 4:
	    calvin.form = 'grizzly bear';
	    break;
	case 5:
	    calvin.form = 'canary';
	    break;
	default:
	    calvin.form = 'human boy';
	    break;
    }
}

function transmogrifyCopy(calvin) {
	if (typeof calvin !== 'object') {
	    console.log('argument is of the wrong type');
	    return;
	}


    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var newForm = calvin.form;

    // console.log('random ' + randomNumber);
    switch(randomNumber) {
	case 1:
	    newForm = 'tyrannosaurus';
	    break;
	case 2:
	    newForm = 'grey wolf';
	    break;
	case 3:
	    newForm = 'bengal tiger';
	    break;
	case 4:
	    newForm = 'grizzly bear';
	    break;
	case 5:
	    newForm = 'canary';
	    break;
	default:
	    newForm = 'human boy';
	    break;
    }

    return {
    	'name' : calvin.name,
    	'bestFriend' : calvin.bestFriend,
    	'form' : newForm
    };
}

