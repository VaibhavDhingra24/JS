// Converting numbers, strings to different operators

let score = true

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan
// true => 1; False => 0

let isLoggedIn = "Vaibhav"

let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn)

// 1 => True; 0 => False
// "" => False
// "Vaibhav" = True


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********** Operations ***********

let value = 3
let negValue = -value
// console.log(negValue)

/*console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(4%3)
console.log(2+2)
*/

let str1 = "Vaibhav"
let str2 = " Dhingra"

let str3 = str1 + str2
// console.log(str3)

/* console.log("1" +2) // Complex situation
console.log(1+ "2")
console.log("1"+ 2+ 2) // here, the initial thing is string then it'll be treated as string 
console.log(1+ 2 + "2") // here, if the initial thing is not string then the conversion will happen and the later part is then treated as string hence 1+2 =3 and then 3 +"2" = 32
*/

// console.log( (3+10) * 5 % 3)

//console.log(+true);
//console.log(true+) // throws error

//console.log(true+true)

let num1, num2, num3

num1 = num2 = num3 = 2+4

let gameCounter = 100
++gameCounter
//console.log(gameCounter)

// *** Increment Operation ***

let x = 2, y= 1

//x = ++y // Prefix - retruns 2,2


x = y++ // postfix - returns 1,2
console.log(x,y) 



