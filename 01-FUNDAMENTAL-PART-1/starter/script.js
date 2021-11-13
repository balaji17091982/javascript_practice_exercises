// console.log("========================================");
// console.log("Variables & Values");
// console.log("========================================");
// // Variables and Values
// // camelCase for variables with multiple words 
// let firstName = "Venkatachalam";
// console.log(firstName);

// // small case for variables with single word
// let age = 36;
// // variables cannot start with a number
// // let 3hours = 3;

// //variable names can only contain letters, numbers, umderscores and the dollar sign

// // let a&b='5';
// let c$23 = 6
// console.log(c$23);

// //variable names cannot be keywords/reserved keywords
// // let new=5;
// // console.log(new);
// // let function=7;

// // 'name' is a reserved keyword but is allowed to use. In some cases it will also create problems.
// // let name='Balaji';

// //Convention:Variable names hould not start with an upper case letter.
// // let Name='Balaji'

// //Convention: For constants we can use all capital case letters
// let PI = 3.1415;

// // Convention: Keep the name of the variables as description as you can, so that when u read the code u know what it does.
// // Recommended:
// let myFirstRole = 'C_Developer';
// let myCurrentRole = 'Python_Developer';
// // Not Recommended:
// let role1 = 'C_Developer';
// let role2 = 'Python_Developer';

// // Assignment
// let countryName = 'India';
// let continentName = 'Asia';
// let populationInMillions = 1378.6;

// console.log("Name of the Country:", countryName);
// console.log("Name of the Continent:", continentName);
// console.log("Population of the Country (in millions):", populationInMillions, 'M');
//==============================================================
// // Datatypes
// //Number
// console.log("========================================");
// console.log("Datatypes");
// console.log("========================================");
// let numberData = 5;
// console.log(numberData, " ", typeof numberData);
// //String
// let stringData = "Balaji";
// console.log(stringData, " ", typeof stringData);
// //Boolean
// let boolData = false;
// console.log(boolData, " ", typeof boolData);
// // Undefined
// let undefinedData;
// console.log(undefinedData, " ", typeof undefinedData);
// //Null
// let nullData = null;
// console.log(nullData, " ", typeof nullData);

// // Dynamic typing (typecasting on the go)

// nullData = "NullData"
// console.log(nullData, " ", typeof nullData);

// // let, const and var
// let myAge = 30;

// myAge = 31;   //'let' variable allows re-assigning/mutate
// //'let allows for empty variables'

// const birthYear = 1991;

// // birthYear = 1990;
// // Uncaught TypeError: Assignment to constant variable.

// //const does not allow empty variables.
// // const myBirthYear;
// //Uncaught SyntaxError: Missing initializer in const declaration
// //"var" type variable declaration to be avoided.
// //"var" works pretty much same as "let".
// var myAgeVar = 32;
// //allows mutation.
// myAgeVar = 33;
// //Difference between let and var is:
// // let is block scoped and
// // var is function scoped.


// //JS will also accept variables without let or const or var.
// //It will not create the variable in the local scope, instead it will create a property on the Global object.
// //This may create many problems.
//==============================================================
// //Basic Operators:
// const now = 2021;
// //subtraction
// const ageBalaji=now-1982;
// const ageAbhinav = now-2016;

// console.log("Balaji Age:",ageBalaji);
// console.log("Abhinav Age:",ageAbhinav);
// //exponentiation **
// console.log("5**3 = ",5**3);

// //+ can be used for string concatenation
// const firstNameOperators='Balaji';
// const lastNameOperators='Venkatachalam';
// console.log(firstNameOperators,' ',lastNameOperators);

// let myValueOperator = 10+5;   //myValueOperator=15
// myValueOperator += 10;        //myValueOperator = myValueOperator + 10 = 25
// myValueOperator *= 4;          //myValueOperator = myValueOperator * 4 = 100
// myValueOperator++;  //myValueOperator = myValueOperator + 1 = 101
// myValueOperator--;  //myValueOperator = myValueOperator -1 = 100
// console.log(myValueOperator);

// // Comparison Operator
// console.log(ageBalaji > ageAbhinav);
// console.log(ageBalaji < ageAbhinav);
// console.log(ageBalaji >= ageAbhinav);
// console.log(ageBalaji <= ageAbhinav);
// console.log(ageBalaji == ageAbhinav);
//==============================================================
// // Operator Precedence

// //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10

// console.log(x, y);
// //output = 10 10 because arithmetic operators have higher precedence than assignment operators.

// const now = 2021;
// const yearOfBirthBalaji = 1982;
// const yearOfBirthAbhinav = 2016;
// const ageBalaji = now - yearOfBirthBalaji;
// const ageAbhinav = now - yearOfBirthAbhinav;
// const averageAgeWrong = ageBalaji + ageAbhinav / 2;
// const averageAgeCorrect = (ageBalaji + ageAbhinav) / 2;
// console.log("wrong average:",averageAgeWrong);
// console.log("correct average:",averageAgeCorrect);
//==============================================================
// // Coding Challenge

// let heightMark = 1.69;
// let heightJohn = 1.95;
// let weightMark = 78;
// let weightJohn = 95;

// let bmiMark = weightMark / (heightMark ** 2);
// let bmiJohn = weightJohn / (heightJohn ** 2);
// let markHigherBmi = (bmiMark > bmiJohn)

// console.log("BMI MARK:", bmiMark);
// console.log("BMI JOHN:", bmiJohn);
// console.log("(BMI MARK > BMI JOHN):", markHigherBmi);

// heightMark = 1.88;
// heightJohn = 1.76;
// weightMark = 95;
// weightJohn = 85;

// bmiMark = weightMark / (heightMark ** 2);
// bmiJohn = weightJohn / (heightJohn ** 2);
// markHigherBmi = (bmiMark > bmiJohn)
// console.log("BMI MARK:", bmiMark);
// console.log("BMI JOHN:", bmiJohn);
// console.log("(BMI MARK > BMI JOHN):", markHigherBmi);
//==============================================================