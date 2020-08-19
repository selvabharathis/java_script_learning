const student = {
    name: 'john',
    age: 23,
    isActive: true
}

// convert this object into a string to be stored in local storage

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)

//localStorge.setItem('student',studentObjToString)

// convert json string to object again
const toJSONStudent = JSON.parse(studentObjToString)
console.log(typeof toJSONStudent)
// accesing the data inside object
console.log(toJSONStudent.age)