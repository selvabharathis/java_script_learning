class User{
    constructor(firstname,lastname,credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my full name`
        return fullname;
    }
    editName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}

class Teacher extends User { 
    constructor(firstname,lastname,credit,subject){
        super(firstname,lastname,credit)
        this.subject = subject
    }
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`
        return fullname;
    }
    favDrink(name){
        console.log(`my fav. drink is ${name}`)
    }
}

const john = new User('John','Anderson',34)
const sammy = new User()
console.log(john)
console.log(sammy)
console.log(john.getFullName())
john.editName('Johnny Anderson')
console.log(john.getFullName())

const selva = new Teacher('selvabharathi','s',100)
const jumbo = new Teacher('jumbo','m',21,'web design')

console.log(selva.getFullName());
console.log(jumbo.getFullName());