// - File Handling in NodeJS

const fs = require("fs");

// Sync - Blocking Operation
const result = fs.writeFileSync("./test.txt", "Learning NodeJS");

// Async - Non-Blocking Operation
fs.writeFile("./test.txt", "Hey NodeJS", (err, result) => {
    console.log("Created a Text file using file system");
})

// Reading from a file (Sync)
const result1 = fs.readFileSync("./test.txt", "utf-8");
console.log(result1);

// Reading from a file (Async) [Doesn't return anything]
fs.readFile("./test.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})

// - Sync function returns results that can be stored and logged.
// - Async functions doesn't return anything directl but expects a callback function through which it returns error and result if required.

// To Appead to a file instead of overwriting (Sync and Async)
fs.appendFileSync("./test.txt", "Hey There\n"); // Gets appended to the file everytime we run it.

// - There are many other functions in this fs module 

// We can also copy files
fs.cpSync("./test.txt", "./copy.txt");

// We can also delete files
fs.unlinkSync("./copy.txt");

// We can see stats about a file
console.log(fs.statSync("./test.txt"));