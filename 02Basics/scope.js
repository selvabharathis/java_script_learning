let iAmGlobal = 'someValue'

if(true){
    let iamLocal = 'someMoreValue'
    // var iamLocal = 'someMoreValue' 
    iAmGlobal = 'superman'
    console.log(iAmGlobal)
    console.log(iamLocal)
}
// console.log(iamLocal)
console.log(iAmGlobal)
// var is used for global only, let is used to perfect scope of variable