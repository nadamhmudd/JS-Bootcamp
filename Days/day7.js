/*
Loops
-------------------------------
*/

//#region Challenge 1:
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let stopIndex = myAdmins.join().toLowerCase().split(",").indexOf("stop");
let size = stopIndex != -1 ? stopIndex : myAdmins.length;

document.write("<div> We Have X Admins</div>");
document.write(`<div> We Have ${size} Admins</div>`);

for (let i = 0; i < size; i++) {
  document.write(`<hr>\nThe Admin for Team ${i + 1} is ${myAdmins[i]}`);

  for (let j = 0, counter = 1; j < myEmployees.length; j++) {
    if (myEmployees[j].startsWith(myAdmins[i][0])) {
      document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`);
    }
  }
}
//#endregion

// --------for loop------------
//#region Task 1:
let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
//#endregion

//#region Task 2:
console.log("task 2:");
start = 10;
end = 0;
let stop = 3;

for (; start >= stop; start -= end + 1) {
  start.toString().length < 2
    ? console.log(`0${start}`)
    : console.log(start.toString());
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
//#endregion

//#region Task 3:
console.log("task 3:");
start = 1;
end = 6;
let breaker = 2;
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
for (; start <= end; start++) {
  console.log(`${start}\n\
${"-".repeat(breaker)} ${breaker}\n\
${"-".repeat(breaker)} ${Math.pow(breaker, breaker)}`);
}

//#endregion

//#region Task 4:
console.log("task 4:");
let index = 10;
let jump = 2;
end = 0;

for (;;) {
  // Write Your Code Here
  if (index === jump) break;
  console.log(index);
  index -= jump;
}

// Output
// 10
// 8
// 6
// 4
//#endregion

//#region Task 5:
console.log("task 5");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

for (
  let i = letter.length - 1, counter = letter.length;
  i < friends.length;
  i++
) {
  if (friends[i].toLowerCase().startsWith(letter)) continue;
  console.log(`${counter} => ${friends[i]}`);
  counter++;
}
//#endregion

//#region Task 6:
console.log("task 6:");

start = 0;
let swappedName = "elZerO";
let name = swappedName.split("");
// Output
//"ELzERo"

for (; start < name.length; start++) {
  if (name[start] === name[start].toLowerCase())
    name[start] = name[start].toUpperCase();
  else name[start] = name[start].toLowerCase();
}
console.log(name.join(""));

//#endregion

//#region Task 7:
console.log("task 7:");
start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
// Output
// 2
// 3
// 4

for (++start; start < mix.length; start++) {
  if (typeof mix[start] == "number") console.log(mix[start]);
}
//#endregion

// --------while loop----------
//#region Task 1:
console.log("Task while loop:");
friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
let counter = 0;
// Output
// "1 => Sayed"
// "2 => Mahmoud"

while (index < friends.length) {
  if (
    typeof friends[index] !== "number" &&
    !friends[index].toUpperCase().startsWith("A")
  )
    console.log(`${++counter} => ${friends[index]}`);
  index++;
}
//#endregion
