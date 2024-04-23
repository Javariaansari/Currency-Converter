#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EBR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EBR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number"
    }
]);
//dynamic approach
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
