let name = '   Alex Labanino    '

// Length property
console.log(name.length)

// Convert to uppercas
console.log(name.toUpperCase()) 

// Convert to lowercase
console.log(name.toLowerCase()) 

// Includes method
let passwords = 'abc123password089'
console.log(passwords.includes(passwords))

// Trim whites
console.log(name.trim())

// Challenge area
let isValidPassword = function(password) {
    // if (password.length > 8 && !password.includes('password')) {
    //      return true
    // } else {
    //    return false
    // }
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfs'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpasswords'))