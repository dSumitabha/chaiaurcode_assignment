// function to add two numbers

function addNums(a,b){
    return (a + b)
}

console.log(addNums(30,45))

//Funtction to subtract numbers

function subtract(a,b){
    if(a>=b){
        return (a-b)
    }
    return b-a
}
console.log(subtract(8,3))

//Function to multiply two numbers
function multiply(a,b){
    return a * b
} 
console.log(multiply(7,8))

//Function to divide two numbers
function divide(a,b){
    return a/b
}
console.log(divide(18/3))

//Functiont to find the remainder

function remainder(a,b){
    return a % b
}
console.log(remainder(25,4))

//use increment operator

let count = 35
count +=1
console.log(count)

//use decrement operator

let temp = 24
temp -= 1
console.log(temp)

//leeThan operator
const lessThan = (a,b) => {
    return a < b 
}
console.log(lessThan(7,9))  // will output true

//greaterThan operator
const greaterThan = (a,b) => {
    return a > b 
}

console.log(greaterThan(7,9))   // will output false

//lessThanEqual operator 
const lessThanEqual = (a,b) => {
    return a <= b
}
console.log(lessThanEqual(19,27))   // will output true

//greaterThanEqual operator
const greaterThanEqual = (a,b) => {
    return a >= b
}
console.log(greaterThanEqual(33,25))   // will output false

//check operator 
const equalCheck = (a,b)  => {
    return a == b 
}
console.log(equalCheck(23,'23'))    // will output true

//strictCheck operator
const strictCheck = (a,b) => {
    return a === b
}
console.log(strictCheck(23,'23'))    // will output false

//and opertor
const doubleCheck = (a,b) => {
    return a > b && a !== 0
}
console.log(doubleCheck(5,2))       //will output true

//or operator 
const optionalCheck = (a,b) => {
    return (a > b) || (a !== 0)
}
console.log(optionalCheck(5,3))     //will output true

//negateCheck a condition 
const negateCheck = (a,b) => {
    return a !== b
}
console.log(negateCheck(3,9))      //will output true

//ternary opertor
const ternaryCheck = (a,b) => {
    return (a > b) ? 'right' : 'wrong'
}
console.log(ternaryCheck(5,8))      //will output wrong