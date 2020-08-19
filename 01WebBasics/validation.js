function myValidation(){
    let myValue = document.getElementById('myform').value
    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log("not a valid input")
    }else{
        console.log("this input is ok")
    }
}