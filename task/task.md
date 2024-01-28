# Task

Implement class Worker, that will have the following properties:
name, surname, rate (salary per day), days (number of days worked this month)
Class should also have getalary method, that will output workers salary per month.
Salaty is a multiple of rate \* days

Example:

const johnDoe = new Worker('John', 'Doe', 10);

console.log(johnDoe.name) // John
console.log(johnDoe.surname) // Doe
console.log(johnDoe.getfullName()) // John Doe
console.log(johnDoe.rate) // 10

console.log(johnDoe.getSalary(31)) // 310
