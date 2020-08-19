// insert into local storage
localStorage.setItem('hero','thor')
localStorage.setItem('todo','buy ice tea')
// getting value from the local storage
var myHero = localStorage.getItem('hero')
console.log(myHero);
console.log(localStorage.getItem('todo'))
// updating the value in the local storage
localStorage.setItem('todo','record youtube videos')
console.log(localStorage.getItem('todo'))
// remove item from the local storage
localStorage.removeItem('hero')
console.log(localStorage.getItem('hero'))
// clear entire local storage
localStorage.clear()

