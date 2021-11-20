/*
// Coding Challenge-2

const HeightMark =  1.69;
const MassMark = 78;

const HeightJohn = 1.95;
const MassJohn = 92;

const BMIMark = MassMark/(HeightMark**2);
const BMIJohn = MassJohn/(HeightJohn**2);

if(BMIMark > BMIJohn) {
    console.log(`MarkBMI (${BMIMark}) > JohnBMI (${BMIJohn})`)
}
else {
    console.log(`MarkBMI (${BMIMark}) < JohnBMI (${BMIJohn})`)
}
*/
/*
//Type Conversion
const birthYear = "1982";
birthYearNumber = Number(birthYear)
console.log(birthYear, birthYearNumber); //"1982" 1982
console.log(birthYear + 18, birthYearNumber + 18); //198218, 2000
firstName = 'Balaji';
console.log(Number(firstName)) //NaN

//Type coercion
console.log('I m ' + 40 + ' Years Old'); //40 is converted to string
console.log('15' - ' 3' - 10); //15 and 3 are converted to numbers and 15 - 3 -10 is computed to be 2
*/
/*
let testString1 = "Hello";
console.log("testString1:", testString1, typeof(testString1));

let testString2 = {};
console.log("testString2:", testString2, typeof(testString2));

let testString = testString1;
if(typeof(testString)=='object') {
    console.log("String encountered")
} else {
    console.log("Non-String encountered");
}
*/

age_string = prompt("What is your age?")

if(age_string===18) {
    console.log('You are 18 Years old');
} else if(age_string==='18') {
    console.log(`You are ${age_string} Years old !!`);
} else {
    console.log(`You are ${age_string} Years old!!!`);
}