var  a = 510;
var  b = 308;
var  c = 486;
var  d = 572;

var production = [a, b , c, d];
var i=0;
while (i<production.length){
    var shed = ["A", "B", "C", "D"];
    console.log("Your production in Shed " + shed[i] + " is " + production[i] + " Litres per day");
    i++;
}
function myFunction() {
    var txt;
if (confirm("Report!")) {
    txt = ("Your production in Shed " + "A" + " is " + 510 + " Litres per day");
    i++;
  } else {
    txt = "Undefined!";
  }
  document.getElementById("report").innerHTML = txt;
}

var totalProduction = a + b + c + d;
console.log("Your total production is " + totalProduction + " litres per day");

var sellingPrice = 45;
console.log("Your daily total income will be Ksh. " + totalProduction * sellingPrice)
console.log("Your weekly income will be Ksh. " + totalProduction * sellingPrice * 7);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

months = daysOfMonthLeap;
var i=0;
while (i<months.length){
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("Your income for " + month[i] + " is " + totalProduction * sellingPrice * months[i]);
    i++;
}