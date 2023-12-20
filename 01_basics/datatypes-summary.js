// # Primitive DataTypes - Call by value - changes that happen are in  a copy

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = '123'
const anotherID = 123

// console.log(id == anotherID) // Value same 
// console.log(id === anotherID) // Dataype different 

const bignumber = 4849585637686887878458555758865n
// console.log(typeof bignumber)

const id1 = Symbol('123')
const anotherID1 = Symbol('123')

// console.log(id1 === anotherID1)

// Java is dynamic or static ?
// In Java, there's no need to define the type

/*
FOR JS const score = 100
FOR TS const:number = 100 (We need to define in typescript)
*/

// # Reference Type(Non-primitive)

// Arrays, Objects, Functions - Call by reference 

const bros = ["Vaibhav", "Saatvik", "Lakshya", "Aashi", "Manan"] // Array => Square brackets

let myObj = {
  Name: "Vaibhav",     // Object => Curly braces
  Age: 24
}

const myFunction = function(){
    console.log("Hello World");    // Function => function(){}
}

console.log(typeof bros) // Type shows object even though its an Array
console.log(typeof myObj) // Object is object
console.log(typeof myFunction) // Type shows function but its called 'Object Function'

// Typeof Operator documentation - https://262.ecma-international.org/5.1/#sec-11.4.3
