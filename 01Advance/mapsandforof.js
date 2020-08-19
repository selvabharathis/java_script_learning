var john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

// using map(key,value)
let users = new Map()
// console.log(typeof users)

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)
// online database,like amazon, they charge for number of operation we performing,not on bandwidth etc in most cases
// console.log(users)
//map always returns you an iterable.
// console.log(users.size)

// let now passing these data to mongo or firebase
// console.log(users.get('sam'))// put the key and get the value

// console.log(users.keys())//gives all the key, and on that you can iterate and fetch the value
// console.log(users.values())// gives all the value, and on that you can iterate and fetch

// how to loop(iterate) through the map using for-of 

// for(const key of users.keys()){
//     console.log(key)
// }

// for(const value of users.values()){
//     console.log(value.name)// since value is an object there, we use . and get the name only
// }

// to get keys and value aswell
// for(const [key,value] of users.entries()){
//     console.log(key + ' = ' + value.name)
// }

//using for-each loop

// users.forEach((value,key)=> console.log(key + ' = ' + value.name))

// users.forEach((key,value)=> console.log(key + ' = ' + value.name))

var arrofArr = [ ['one','1'], ['two','2'], ['three','3'] ]

var newMap = new Map(arrofArr)// this will make key-value pair automatically from the array of array

console.log(newMap)