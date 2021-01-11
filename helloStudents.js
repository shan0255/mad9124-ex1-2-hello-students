'use strict'

// 1. Read the JSON file into a variable called students
const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
students.forEach( ({firstName , lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
});

// 3. Print out the number of last names starting with the letter D
let filt = students.filter(({lastName}) => lastName.startsWith('D'));
console.log(`Count of last names starting with "D" is ${filt.length}`);
