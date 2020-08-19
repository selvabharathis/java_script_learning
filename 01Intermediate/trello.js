const days = ['Mon','Tue','Wed','Thu','Fri','Sat']

let sayHello = function(){
    console.log("Greeting message for user")
}
// sayHello()
days.forEach(sayHello)// if we are able to pass the functiona and call, we can replace the call by keeping function there itself
// days.forEach(function(){
//     console.log("Greeting message for user")
// })

days.forEach(function(val,index){
    console.log(`starts with ${index} -- ${val}`)
})