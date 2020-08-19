let myTodos = { //myTodos is an object
    day: 'Monday', // these are key-val pair data member
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){ // functions,, we say function when they are inside a object
        this.meetings = this.meetings + num // we use this, to poin that its inside that object i.e current object
        // if there is no 'this' mettings is not in that local scope, hence gives error.
    },

    summary : function(){
        return `You have ${this.meetings} meetings today!`
    }
}

myTodos.addMeeting(4)
console.log(myTodos.summary())