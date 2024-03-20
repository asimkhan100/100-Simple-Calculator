#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select Operator",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
if (answer.Operators === "Addition") {
  console.log(answer.firstNumber+answer.secondNumber);
} else if (answer.Operators === "Substraction") {
  console.log(answer.firstNumber-answer.secondNumber);
} else if (answer.Operators === "Multiplication") {
  console.log(answer.firstNumber*answer.secondNumber);
} else if (answer.Operators === "Division") {
  console.log(answer.firstNumber/answer.secondNumber);
} else {
  ("Please select operator");
}
