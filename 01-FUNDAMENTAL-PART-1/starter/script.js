console.log("========================================");
console.log("Variables & Values");
console.log("========================================");
// Variables and Values
// camelCase for variables with multiple words 
let firstName = "Venkatachalam";
console.log(firstName);

// small case for variables with single word
let age = 36;
// variables cannot start with a number
// let 3hours = 3;

//variable names can only contain letters, numbers, umderscores and the dollar sign

// let a&b='5';
let c$23 = 6
console.log(c$23);

//variable names cannot be keywords/reserved keywords
// let new=5;
// console.log(new);
// let function=7;

// 'name' is a reserved keyword but is allowed to use. In some cases it will also create problems.
// let name='Balaji';

//Convention:Variable names hould not start with an upper case letter.
// let Name='Balaji'

//Convention: For constants we can use all capital case letters
let PI = 3.1415;

// Convention: Keep the name of the variables as description as you can, so that when u read the code u know what it does.
// Recommended:
let myFirstRole = 'C_Developer';
let myCurrentRole = 'Python_Developer';
// Not Recommended:
let role1 = 'C_Developer';
let role2 = 'Python_Developer';

// Assignment
let countryName = 'India';
let continentName = 'Asia';
let populationInMillions = 1378.6;

console.log("Name of the Country:", countryName);
console.log("Name of the Continent:", continentName);
console.log("Population of the Country (in millions):", populationInMillions, 'M');

// Datatypes
//Number
console.log("========================================");
console.log("Datatypes");
console.log("========================================");
let numberData = 5;
console.log(numberData," ",typeof numberData);
//String
let stringData = "Balaji";
console.log(stringData," ",typeof stringData);
//Boolean
let boolData = false;
console.log(boolData," ",typeof boolData);
// Undefined
let undefinedData;
console.log(undefinedData," ",typeof undefinedData);
//Null
let nullData = null;
console.log(nullData," ",typeof nullData);

// Dynamic typing (typecasting on the go)

nullData = "NullData"
console.log(nullData," ",typeof nullData);
