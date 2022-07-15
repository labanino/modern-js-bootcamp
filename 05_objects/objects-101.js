let myBook = {
    title: '1984',
    author: 'George Orwell', 
    pageCount: 326 
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challange area

let myData = {
    name: 'Alex Labanino',
    age: 55,
    location: 'Sarasota, FL'
}

console.log(`${myData.name} is ${myData.age} and lives in ${myData.location}`)

myData.age = myData.age + 1

console.log(`${myData.name} is ${myData.age} and lives in ${myData.location}`)