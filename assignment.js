// First Part of the Assignment.

function feetToMile(feet){
    var Mile = feet / 5280;
    return Mile;
}

var persons = [155, 298, 370];

var jhankarFeet = feetToMile(persons[0]);
console.log(jhankarFeet);
var faisalFeet = feetToMile(persons[1]);
console.log(faisalFeet);
var sobitaFeet = feetToMile(persons[2]);
console.log(sobitaFeet);

// Second Part of the assignment
// Just for note:
// 1 cubicFeet = 1 chair.
// 3 cubicFeet = 1 table.
// 5 cubicFeet = 1 bed.
function woodCalculator(chair, table, bed){
    var amountOfChair = chair * 1;
    var amountOfTable = table * 3;
    var amountOfBed = bed * 5;
    var total = amountOfChair + amountOfTable + amountOfBed;
    return total;
}
var amounts = woodCalculator(14, 5, 12);
console.log(amounts);

// Third part of the assignment