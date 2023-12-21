// # Primitive DataTypes - Call by value - changes that happen are in a copy of the original

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

// Arrays, Objects, Functions - Call by reference - Whatever changes we do, they reflect in the original as well

const bros = ["Vaibhav", "Saatvik", "Lakshya", "Aashi", "Manan"] // Array => Square brackets

let myObj = {
  Name: "Vaibhav",     // Object => Curly braces
  Age: 24
}

const myFunction = function(){
    console.log("Hello World");    // Function => function(){}
}

// console.log(typeof bros) // Type shows object even though its an Array
// console.log(typeof myObj) // Object is object
// console.log(typeof myFunction) // Type shows function but its called 'Object Function'

// Typeof Operator documentation - https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++

// Types of Memory 

// Stack (Primitive datatypes), Heap (Non-primitive)
 
let myYoutubeName = "NerdwithBeard" // string - primitive type hence stack

let anothername = myYoutubeName 
anothername = "vaibhavdhingra24"

// console.log(anothername) // This shows the updated value
// console.log(myYoutubeName) // This shows the origial value

// This means that the 'anothername' thing takes a copy of the original and makes changes in that.

let user1 = {
    email: "User@gmail.com",  // This is an object so it goes in Heap memory
    upi: "user@ybl"
}

// console.log(typeof user1)

let user2 = user1
user2.email = "vaibhav@gmail.com" // We update values in objects using '.' followed by the value we need to change

// console.log(user1.email)
// console.log(user2.email) // Here we see that both the objects return the same updated value,  which  means that changes in the original also happen unlike what we saw in the String(Primitive datatype(Stack memory))

