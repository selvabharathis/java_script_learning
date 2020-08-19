const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 64
    }else{
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertToRs('five')
// console.log(myValue);

try{
    const myValue = convertToRs('five')
    // const myValue = convertToRs(5)
    console.log(myValue);
}catch(error){
    console.log(error)
    // console.log(error.message)
}
// promisies for web based request

console.log('I will not run if program crashes')