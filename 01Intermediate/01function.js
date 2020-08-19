let sayHello = function(name){
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}

// sayHello('John')

let fullNameMaker = function(firstName,lastName){
    console.log('Welcome to peep for learning')
    console.log(`Happy to have you, ${firstName} ${lastName}`)
}

// fullNameMaker('SelvaBharathi','S')

let myAdder = function(num1,num2){
    let added = num1 + num2
    return added
}

// let result = myAdder(3,5)
// console.log(result)

//default parameter example
let guestUser = function(name = 'unName',courseCount = 0){
    return 'Hello '+name+' and your course count is : '+courseCount
}

console.log(guestUser('selva')) //gives undefined if there is not default 