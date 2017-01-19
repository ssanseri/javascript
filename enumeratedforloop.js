// iterate over an array

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (var p in pageNames) {
	console.log(p + ' is ' + pageNames[p]);
}

// iterate over an object

var pages = {
	'first' : 'Home',
	'second' : 'About Us',
	'third' : 'Contact Us',
	'fourth' : 'JavaScript Playground',
	'fifth' : 'Blog', 
};

for (var p in pages) {
	 if (pages.hasOwnProperty(p)) {
	     console.log(p + ' is ' + pages[p]);
	 }
}