// very common user case: looping over an array.
var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i += 1) {
	var currentPageTitle = pageNames[i];
	if (document.title === currentPageTitle) {
	    console.log('We ARE here: ' + currentPageTitle);
	} else {
	    console.log('We are not here: ' + currentPageTitle);
	}
}