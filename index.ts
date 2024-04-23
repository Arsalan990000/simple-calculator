#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massage: "enter first number", type: "number", name: "firstnumber" },
  { massage: "enter second number", type: "number", name: "secondnumber" },
  {
    massage: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subraction", "multiplication", "division"],
  },
]);

// conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else {
    console.log("please select valid operator")
}   

console.log("THE end");