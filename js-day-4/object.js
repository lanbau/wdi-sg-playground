function Person () {
  this.luckyNumber = Math.random()
}

Person.prototype.greeting = function (name) {
  console.log('hello' + name)
  console.log(this.luckyNumber) // depends on the instance: seb or cheryl
}

var seb = new Person()
console.log(seb.luckyNumber) // 5
seb.greeting('Stranger')

var cheryl = new Person()
console.log(cheryl.luckyNumber) // 10
cheryl.greeting('Stranger')
// purpose is to share greeting with seb and cheryl
// this will distinguish seb's lucky number from cheryl's

/*
seb
Person {luckyNumber: 0.5149021979887038}

cheryl
Person {luckyNumber: 0.7154465534258634}

person.prototype.name ='david' will apply to all instances: seb, cheryl
*/

/* class person {
  constructor () {
    this.luckyNumber = Math.random()
  }
  greeting (name) {
    console.log('hello '+ name)
  }
}
//person.prototype.greeting = function (name){
  //console.log('hello ' + name)
//}
var seb = new person()
seb.greeting('derek')

Transpiling in babel
*/

var atlas = {
  'singapore': {
    population: 'too many'
  },
  'kaosing': {
    haze: 'not too bad'
  }
}
atlas[person.address.city]

atlas['kl'] = {food: 'cheap'}
delete person.age

var person = {
  name: 'sebastian',
  city: 'singapore',
  age: 32,
  hobbies: ['coding', 'motorcycles'],
  address: {
    street: 'East Coast Road',
    city: 'Singapore'
  },
  height: null,
  greeting: function (name) {
    console.log('hello' + name)
    return {
      luckyNumber: Math.random()
    }
  }
}

console.log(person['name'])
console.log(person.name)
console['log'](person['name'])
person.greeting('dave') // hello dave -> 0.123

var names = {
  0: 'bob',
  1: 'alice',
  2: 'cheryl'
}
console.log(names[0]) // bob
console.log(names[1]) // alice
