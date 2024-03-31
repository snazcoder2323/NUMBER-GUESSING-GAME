#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWELCOME TO\'CODE WITH SNAZ'\-CLI PROJECT(NUMBER GUESSING GAME)\n");
import chalk from "chalk";
// console.log(chalk.bgRedBright)
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a number betwen 1 to 10 and write it:"
    }]);
const { userGuess } = answers;
console.log(chalk.bgRedBright.bgWhiteBright(`Guessed No: ${userGuess}, correct Answer is:{systemGeneratedNumber}`));
if (userGuess === systemGeneratedNumber) {
    console.log(chalk.redBright("correct Answer! congratulation You have Win"));
}
