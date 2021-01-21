const person = function (firstName, lastName, age, like = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.like = like
}

// this is a constructor function 

// prototype inheritance

person.prototype.getBio = function() {
    const reback = `${this.firstName} is ${this.age}`
    this.like.forEach((like) => {
        reback += ` ${this.firstName} likes ${like}`
    })
    return reback
}

person.prototype.setName = function (fullName) {
    let fullname = fullName.split(' ')
    this.firstName = fullname[0]
    this.lastName = fullname[1]
}

const me = new person('Ayoub','Aouad',25,['Coding', 'Hicking'])

console.log(me)

me.setName('Ayoub Aouad')
console.log(me.getBio())
