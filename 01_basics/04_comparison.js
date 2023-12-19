// **** Comparisons *****

/* Basics
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
*/

/* problem occurs when we compare different datatypes
we need to ensure that the datatypes are same so  we get predictable result */

// console.log("2">1) // automatically converts string to number 

/*
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
*/

/* Comparison(>,>=) and equality check(==) work differently.
Comparison converts null to a value for comparison which is equal to 0. 
That's why "console.log(null > 0)" returns false and "console.log(null >= 0)" returns true */

/*
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0) // All false
*/

// '===' Strick check => checks the datatypes as well

console.log("2" == 2)
console.log("2" === 2) // This checks the datatypes as well and hence returns false since "2" is string an 2 is a number