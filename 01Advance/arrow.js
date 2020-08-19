
//normal function
// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('selva'))

// arrow function () =>
// string litrals ` `
const sayHello = (name)=>{
    return "Hey there, " + name + " !"
    //return `Hey there, ${name} !`
}

//can also be written as in short
// const sayHello = (name)=> `Hey there, ${name} !`


// console.log(sayHello('selva'))


const todos = [
    {
        title: 'Buy bread',
        isDone: true
    },
    {
        title: 'Go to gym',
        isDone: true
    },
    {
        title: 'Record youtube video',
        isDone: false
    }
]

const thingsDone = todos.filter((todo)=>{
    return todo.isDone === true
})

//can also be written as
// const thingsDone = todos.filter((todo) => todo.isDone === true)


// console.log(thingsDone)

// usecase where we cannot use arrow function

const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `this canon camera is of ${this.price}$` // throws error undefined
    }
    // a function can also be written as this inside an object
    // myDes(){
    //     return `this canon camera is of ${this.price}$`
    // }
}

console.log(cameras.myDes())

// this is only for redux people
// const func = () => ({key: 'value'})
