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

function brickCalculator(buildingFloor){
    var firstFloors = [1,2,3,4,5,6,7,8,9,10];
    var secondFloors = [11,12,13,14,15,16,17,18,19,20];
    var thirdFloors = [21,22,23,24,25,26,27,28,29,30];
    if(buildingFloor > 10){
        firstFloors = 15 * 1000;
        secondFloors = 12 * 1000;
        thirdFloors  = 10 * 1000;
    }
}
var floor = brickCalculator(7);
console.log(floor);
// Last Part of the assignment.
function tinyFriend(){
    
}
