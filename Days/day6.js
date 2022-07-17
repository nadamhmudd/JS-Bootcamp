/*
Arrays
-------------------------------
*/

//#region Challenge 1:
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]; //0,4

let tempArr = my.slice(++zero, --counter).reverse(); //1,3
console.log(tempArr); // ["Elham", "Mazero"]
console.log(
  tempArr[--zero].slice(zero, --counter) + tempArr[++zero].slice(counter) //0 | 0,2 | 1,2
); // "Elzero"

let temp = my[zero].slice(-counter); //1,2
console.log(temp[--zero] + temp[--counter].toUpperCase()); // "rO" //0,1
//#endregion

//#region Task 1:
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//#endregion

//#region Task 2:
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"] without slice
//#endregion

//#region Task 3:
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
// arrTwo.reverse().splice(1, 0, arrOne); //splice, sort ans reserve return the same array
// finalArr = arrTwo;

finalArr = arrTwo.concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//#endregion

//#region Task 4:
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - 1][0].slice(website.length).toUpperCase()); // ZERO
//#endregion

//#region Task 5:
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) console.log("found");

if (haystack.indexOf(needle) !== -1) console.log("found");

if (haystack.lastIndexOf(needle) !== -1) console.log("found");

//#endregion

//#region Task 6:
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join("").toLowerCase();
console.log(allArrs); // fxy
//#endregion
