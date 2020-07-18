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