// Var is globally scoped while let and cosnt are block scoped
//var can be updated and can be re-declared within its scope
//whereas let can be updated and cannot be re-declared 
//const can neither be updated nor be re-declared

console.log("Creating first file of le var and const") 

var a = 45
var b = "Ravi"
var c = 12
{
    var b = "this"
    console.log(b)
}
console.log(b)

let a = 45
let b = "Ravi"
let c = 12
{
    let b = "this"
    console.log(b)
}
console.log(b)

var b = 45
var b = "Ravi"
let c = 12

console.log(b)

console.log("Creating first file of let, var and const") 

const author = "Ravi"
//let author = "Ravi"   // this will throw an error because const variable cannot be changed and re-declared
let c = 12

console.log(author)
