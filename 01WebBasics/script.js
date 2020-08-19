// alert('java script file is attached')
// const myElement = document.getElementById("idone")
// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0])
// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am being changed using JS'

const myPElement = document.querySelectorAll('p')

myPElement.forEach(function(p){
    // p.remove()
    p.textContent = 'I am changed using loop in js'
})
//creating a new element in DOM
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    // console.log(event)
    event.target.textContent = 'I was clicked'
})

//track from input form
document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value)
})