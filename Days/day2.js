/*
Data Types and variables 
-------------------------------
*/

//challenge1:
let pageTitle = "JS Academy",
  pageDescription = "JavaScript Bootcamp",
  pageDate = "10/2021";

let block = `<div>
<h3>Hello from ${pageTitle}</h3>
<p>${pageDescription}</p>
<span>${pageDate}</span>
</div>`;

document.write(block.repeat(4));

//task 1
let numberOne = 10,
  numebrTwo = 20;

// Ouput
console.log("" + numberOne + numebrTwo); // Normal Concatenate => 1020
console.log(typeof ("" + numberOne + numebrTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numebrTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numebrTwo}`); // Template Literals Way => String

console.log(numebrTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numebrTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

//task 3
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/
console.log(
  '`I\'m In\n\
\\\\\n\
Love \\ """ \'\'\'\n\
++ With ++\n\
\\"""\\"""\n\
""JavaScript""``'
);

//task 4
let a = 21;
let b = 20;

console.log("_" + `${a}_${b}`.repeat(4) + "_"); // _21_2021_2021_2021_20_
