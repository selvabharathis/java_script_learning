// == check for equlity only
// === check for identity only in referencing memory location, whether they are pointing to same location
console.log(2 == 2)
console.log(2 == 2.0)
console.log(2 === 2.0)
console.log('' === '')
let myVarOne = {} //these are object
let myVarTwo = {}
let myVarThree = myVarOne; // referencing object here
console.log(myVarOne === myVarTwo)
console.log(myVarOne === myVarThree)