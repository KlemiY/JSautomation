// promp-sync module activated
const prompt = require("prompt-sync")();

// Conditional branching: if, '?'
// >>>>>> Task #1 <<<<<<

let officialName = prompt("What is the official name of JavaScript?");

if (officialName == "ECMAScript") {
    console.log("Correct!");
}   else {
    console.log("You don't know? It's ECMAScript!");
}

// >>>>>> Task #2 <<<<<<
let inputValue = prompt("Please enter your number");

if (inputValue > 0) {
    console.log("1");
}   else if (inputValue < 0){
    console.log("-1");
}   else {
    console.log("0");
}

// >>>>>> Task #3 <<<<<<
//FROM

let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

//TO

let a = +prompt("First digit");
let b = +prompt("Second digit");

result = (a + b < 4) ? console.log("Not enought") : console.log("Too much");

// >>>>>> Task #4 <<<<<<
//FROM
let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

//TO

let login = prompt("Who are You?");
message = (login == "Employee") ? console.log("Hi!") :
            (login == "Director") ? console.log("Hello!") :
            (login == " ") ? console.log("No login") :
            console.log("check");