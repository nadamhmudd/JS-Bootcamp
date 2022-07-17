/*
Introduction
-------------------------------
*/

//#region task 2 : Create Element
document.write("<h1>JS Day 1</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.weight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
//#endregion

//#region task 3 : style directive
console.log(
  "%cJS %cBootcamp %c2021",
  "color:red; font-size:40px",
  "color:green; font-size:40px",
  "color:white; background-color:blue; font-size:40px"
);
//#endregion

//#region task 4 : console group
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();
//#endregion

//#region task 5 : console table
console.table(["Nada", "Ahmed", "Sameh", "Gamal", "Aya"]);
//#endregion
