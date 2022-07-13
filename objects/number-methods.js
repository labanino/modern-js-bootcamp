let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// Challange
// Random will generate a number, 1 - 5. If the input number is equal to the
// random number will be true otherwise false
let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    
    return guess === randomNum
}

console.log(makeGuess(3))