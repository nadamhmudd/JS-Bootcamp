/*
Arithmetic Operators
-------------------------------
*/

//#region challenge 2:
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+e * -d); //2000
console.log(-d + ++e * ++g + ++f); //173
//#endregion

//#region task 1
// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0
//#endregion

//#region task 2
let num = 3;

// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num++ /*3*/ + --num /*3*/); // 6
// Soultion Three
console.log(num * num - num); // 6
// Soultion Four
console.log((num++ /*3*/ * ++num) /*5*/ / num-- /*5*/ + --num /*3*/); //6
// Solution Five
console.log(num + num + num - num); // 6
// Solution Six
console.log(num++ + num - true); // 6
//#endregion

//#region task 3
let number = "10";

// Solution One
console.log(+number + +number); // 20
// Solution Two
console.log(number++ + --number); // 20
// Solution Three
console.log((number++ % number--) + number); // 20, 10%11 + 10
// Solution Four
console.log(number-- + --number + (number-- % --number)); // 20, 10 + 8 + (8%6)
//#endregion

//#region task 4
let point = 10;

// Write Your Code Here
point = point++ + point-- - --point + true;
console.log(point); // 13

// Write Your Code Here
//        12                  4
//                    13       11          10
point = --point - ((point-- + --point) % --point);
console.log(point); // 8;
//#endregion
