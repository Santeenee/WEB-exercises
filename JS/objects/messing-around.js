//value.prop
//value[prop]

//* HOW TO ACCESS PROPERTIES
// let s = 'ciao'
// let myProp = 'length'
// console.log(s)
// console.log(s.length)
// console.log(s['length'])
// console.log(s[myProp])

//* SOME PROPERTIES ARE METHODS
// console.log('piPPo'.toLowerCase())
// console.log('piPPo'['toLowerCase']())

//* OBJECTS
let car = {
  name: 'MyCar',
  color: 'red'
}

// console.log(car.name)
// console.log(car['color'])

//* hot to change property
car.name = 'Fiat 500'
console.log(car['name'])

//* if prop doesn't exists
//* js creates one
car.height = '6'
console.log(car['height'])
console.table(car)

//* does prop exists
console.log('height' in car) // -> true
car.height = undefined
console.log('height' in car) // -> true

//* delete prop
delete car.height
console.log('height' in car) // -> false

//* for(let prop IN array/object)

let car2 = car //reference

//* use Object.assign() to duplicate the object

let starship = { name: 'You underestimate my powah' }
Object.assign(car2, starship)
console.table(car2)

//* a property can be a function
car.func = function () { return 9 }
console.log(car.func())

//* USE this IN METHODS BECAUSE IT HAS TO WORK ALWAYS WITH OTHER OBJECTS

/*
      ██╗███████╗ ██████╗ ███╗   ██╗
      ██║██╔════╝██╔═══██╗████╗  ██║
      ██║███████╗██║   ██║██╔██╗ ██║
 ██   ██║╚════██║██║   ██║██║╚██╗██║
 ╚█████╔╝███████║╚██████╔╝██║ ╚████║
  ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
*/

//let jsonString = JSON.stringifY(<obj>) //*omit methods
//let jsObj = JSON.parse(jsonString) //* convert from json to obj

// alternatives = csv, xml



