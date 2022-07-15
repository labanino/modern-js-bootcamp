// Create an array with five todos
const todos = ['Walk the dog', 'Have a coffee', 'Go to the gym', 'Have dinner', 'Read a book']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`) 
console.log(`You have ${todos.length} todos`)

todos.forEach(function (todo, index) { // index always as a second argument
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }