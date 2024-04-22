#! /usr/bin/env node
import inquirer from "inquirer";

const answer :{
    sentence : string
} = await inquirer.prompt(
    [
        {
            name: "sentence", 
            type: "input", 
            message : "Enter a Sentence",
        }
    ]
)

const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(word.length);