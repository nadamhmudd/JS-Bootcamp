/*
Number & String
-------------------------------
*/

//#region Number Challenge :
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Number.parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 string
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 Number
//#endregion

//#region String Challenge :
let x = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(x.charAt(2).toUpperCase() + x.slice(3, 6)); // Zero

// 8 H
console.log(x.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(x.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${x.substr(0, 6)} ${x.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  x[0].toLowerCase() +
    x.substring(1, x.length - 1).toUpperCase() +
    x.slice(-1).toLowerCase()
); // eLZERO WEB SCHOOl
//#endregion

//#region Number Task 1 :
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.trunc(100000.5)); // 100000
console.log(Math.ceil(99_999.4)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number.parseInt("100000 Number")); // 100000
console.log(10e3 * 10); // 100000
console.log(+"100000"); // 100000
console.log(-"-100000"); // 100000
//#endregion

//#region Number Task 4 :
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100, number
console.log(+(+myVar.split(" ")[0]).toFixed(2)); // 100.57,
// OR
console.log(+Number.parseFloat(myVar.split(" ")[0]).toFixed(2)); // 100.57

//#endregion

//#region Number Task 5 :
//use isInteger only
let num = 10;
console.log(Number.isInteger(num) + true); // 2
//#endregion

//#region Number Task 6 :
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10
//#endregion

//#region Number Task 7 :
//randim nuber
console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
//#endregion

//#region String Task 1 :
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.toLowerCase().charAt(0)); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.split("")[0].toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase().repeat(3)); // eee
//#endregion

//#region String Task 2 :
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True, contain z
console.log(word.toLowerCase().startsWith(letterE.toLowerCase())); // True, start with e
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // True, end with o
//#endregion
