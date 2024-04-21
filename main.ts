import inquirer from "inquirer"

let todos = []


let todoQuestions= inquirer.prompt(
    {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in your todos?",

},
{
    name: "secondQuestion",
        type: "input",
        message: "what would you like to add more in your todos?",
        default: "true"

}
)