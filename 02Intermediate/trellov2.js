let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeeting = function(todo,meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meet = 0){
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo){
    todo.meetings = 0
    toto.meetDone = 0
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone
    return `you have ${meetLeft} meetings today!`
}

addMeeting(myTodos,4)//its actually sending the reference i.e call by reference, and not call by value

addMeeting(myTodos,2)

meetDone(myTodos,5)

console.log(getSummaryOfDay(myTodos))