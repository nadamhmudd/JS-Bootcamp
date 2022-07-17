/*
Conditions
-------------------------------
*/

//#region Challenge 1 : If Condition Challenge
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("UnKnown");
}
// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("UnKnown");

//---------
let st = "Elzero Web School";

//w possition may change
if (st[st.toLowerCase().indexOf("w")].toLowerCase() === "w") {
  console.log("Good");
}
if (+st !== "string") {
  console.log("Good");
}
if (typeof +st === "number") {
  console.log("Good");
}
if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
//#endregion

//#region Challenge 2 : If and Switch Conditions
let job = "Manager";
let salary = 0;
if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(`Salary for ${job} job is ${salary}`);
// rewrite in switch
switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}
console.log(`Salary for ${job} job is ${salary}`);

//---------

let holidays = 0;
let money = 0;
switch (holidays) {
  case 0:
    money = 5000;
    break;
  case 1:
  case 2:
    money = 3000;
    break;
  case 3:
    money = 2000;
    break;
  case 4:
    money = 1000;
    break;
  case 5:
    money = 0;
    break;
  default:
    money = 0;
}
console.log(`My Money is ${money}`);
//rewtire in if
if (holidays == 0) {
  money = 5000;
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
} else if (holidays === 3) {
  money = 2000;
} else if (holidays === 4) {
  money = 1000;
} else if (holidays === 5) {
  money = 0;
} else {
  money = 0;
}
console.log(`My Money is ${money}`);

//#endregion

//Comparison Operators and Logical Operators
//#region Task 1 :
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 == 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 == +"-40")); // true
console.log(!(10 >= -"-40")); // true
console.log(!("10" === 10)); // true
console.log(!(20 && false)); // true
//#endregion

//#region Task 3 :
console.log("Task 3:");
a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a === b); // true
console.log(a === b || a >= c); // true
console.log(!(a === b) && !(a > b) && !(a <= c) && !(a === c)); // true
//#endregion

// if statments
//#region Task 1 :
// Test Case 1
let num = 9; // "009"
// Test Case 2
//let num = 20; // "020"
// Test Case 3
//let num = 110; // "110"
num < 10
  ? console.log(`00${num}`)
  : num >= 10 && num < 100
  ? console.log(`0${num}`)
  : console.log(num);
//#endregion

//#region Task 2 :
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
  if (num1 !== str)
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}
if (num1 !== str2)
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);

if (str !== str2 && typeof str == typeof str2)
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
//#endregion

//#region Task 4 :
// Edit What You Want Here
num1 = 11;
let num2 = 10;
let num3 = +"11";
let num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
//#endregion

//switch case
//#region Task 1 :
//let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

//let day = "Friday";
//let day = "Saturday";
//let day = "Sunday";
// Output => "No Appointments Available"

//let day = "Monday";
//let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

//let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

//let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

//let day = "World";
// Output => "Its Not A Valid Day"

day = day.trim()[0].toUpperCase() + day.trim().slice(1).toLowerCase();
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
//#endregion
