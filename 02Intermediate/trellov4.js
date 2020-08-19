// const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']
// console.log(myTodos.indexOf('Buy Bread'));

// creating array of objects
const newTodos = [ 
    {
        title: 'Buy Bread',
        isDone: false
    },
    {
        title: 'Go to Gym',
        isDone: false
    }, 
    {
        title: 'Record youtube videos',
        isDone: true
    } ]

    // callback function are the function, which do not have any name, and calls on its position

    // const index = newTodos.findIndex(function(todo,index){
    //     console.log(todo)
    //     return todo.title === 'Go to Gym'
    // })

    // console.log(index)

    //Method 1
    // const findTodo = function(anyTodo,title){
    //     const index = anyTodo.findIndex(function(todo,index){
    //         return todo.title.toLowerCase() === title.toLowerCase()
    //     })
    //     return anyTodo[index]
    // }

    // let printMe = findTodo(newTodos,'Go to gym')
    // console.log(printMe)

    //Method2
    const findTodo = function(anyTodo,title){
        const titleToReturn = anyTodo.find(function(todo,index){
            return todo.title.toLowerCase() === title.toLowerCase()
        })
        return titleToReturn
    }

    let printMe = findTodo(newTodos,'Go to gym')
    console.log(printMe)