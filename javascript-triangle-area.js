// Heron's formula for the area of a triangle given 3 lengths a,b,c
// is Area = square root of (p)(p-a)(p-b)(p-c), where p is half the
// perimeter, or (a+b+c)/2.
var a = 5;
var b = 6;
var c = 7;
var p = (a + b + c) / 2;
var area = Math.sqrt((p)*(p-a)*(p-b)*(p-c));
console.log('Area of the triangle is ' + area); 
document.writeln('Area of the triangle is ' + area); 


 


