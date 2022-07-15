// var has many flaws, eg. with var you are allowed to declare a variable that 
// has already been created, with let or const you will get an error

console.log(age) // undefined
var age

console.log(age) // ReferenceError: Cannot access 'age' before initialization
let age