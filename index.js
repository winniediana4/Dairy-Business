var  a = 510;
var  b = 308;
var  c = 486;
var  d = 572;

var production = [a, b , c, d];
var i=0;
while (i<production.length){
    var shed = ["A", "B", "C", "D"];
    console.log("Your production in Shed " + shed[i] + " is " + production[i] + " Litres per day.");
    i++;
}
var totalProduction = a + b + c + d;
console.log("Your total production is " + totalProduction + " litres per day.");

var sellingPrice = 45;
console.log("Your weekly income will be Ksh " + totalProduction * sellingPrice * 7);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


