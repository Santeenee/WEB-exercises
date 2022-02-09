//* DATA, BINDINGS, VARIABLES
const bikes = [
  { id: 1, category: "Electric Bikes", name: "Rad Rover" },
  { id: 2, category: "Electric Bikes", name: "Rad Rover Step-thru" },
  { id: 3, category: "Standard Bikes", name: "7 Speed Cruiser" },
  { id: 4, category: "Standard Bikes", name: "7 Speed Step-Thru Cruiser" }
]

let cart = [] //[{idBike, quantity}, ...]
const fullDayRates = [75, 35]

//* FUNCTIONS
function menu() {
  console.log('\nPress')
  console.log("    1: bikes list");
  console.log("    2: add a bike to the cart");
  console.log("    3: show cart");
  console.log("    4: remove bike from cart");
  console.log("    5: checkout");
  console.log("other: exit\n");
}

function printBikes() {
  console.clear()
  console.log(`\nBIKES LIST`)
  console.log(`----------\n`)
  // console.table(bikes)
  let dailyPrice;
  for (let bike of bikes) {

    switch (bike.category) {
      case "Electric Bikes":
        dailyPrice = fullDayRates[0]
        break;

      case "Standard Bikes":
        dailyPrice = fullDayRates[1]
        break;
      //...
    }
    console.log(`ID[${bike.id}] (${bike.category}) "${bike.name}" daily: ${dailyPrice}$`)
  }
}

function addToCart() {
  printBikes()
  let bikeChoice = prompt('Scegli bici tramite ID', '1')
  let quantity = Number(prompt('Scegli QUANTITA', '2'))
  let isInCart = false

  for (let item of cart) {
    //if (item already exists in cart)
    //then increment quantity
    if (bikeChoice == item.idBike) {
      item.quantity += Number(quantity)
      isInCart = true
    }
  }
  if (!isInCart) {
    cart.push({ 'idBike': bikeChoice, 'quantity': quantity }) //it works
  }
}

function showCart() {
  let isEmpty = true
  console.clear()
  console.log('Cart')
  for (let item of cart) {
    for (let bike of bikes) {
      if (item.idBike == bike.id) {
        console.log(`${item.quantity} "${bike.name}"`)
        isEmpty = false
      }
    }
  }
  if (isEmpty) console.warn("the cart is empty")
}

function removeFromCart() { //TODO
  printBikes()
  let bikeChoice = prompt('Choose bike to remove typing ID', '4')
  //TODO let quantity = prompt('Scegli QUANTITA', '2')

  for (let i = 0; i < cart.length; i++) {
    for (let bike of bikes) {
      if (cart[i].idBike == bike.id) {
        console.log(`${cart[i].quantity} ${bike.name} removed`)
        cart.splice(i, 1)
      }
    }
  }
}

function checkout() { //?
  showCart()
  //calcolo totale money
  let dailyPrice = 0;
  let moneyForTypeOfBike = 0;
  let total = 0;
  for (let item of cart) {
    for (let bike of bikes) {
      if (item.idBike == bike.id) {
        switch (bike.category) {
          case "Electric Bikes":
            dailyPrice = fullDayRates[0]
            break;

          case "Standard Bikes":
            dailyPrice = fullDayRates[1]
            break;

          default:
            console.log('no category found...')
            break;
        }
        moneyForTypeOfBike = item.quantity * dailyPrice
      }
    }
    total += moneyForTypeOfBike
  }
  console.log(`\nTotal amount: ${total}$`)
}


//* EXECUTE
let scelta = 1
while (scelta == 1 || scelta == 2 || scelta == 3 || scelta == 4) {

  menu()

  scelta = Number(prompt('Scegli una voce dal menu', "1"))
  //console.clear()

  switch (scelta) {
    case 1:
      printBikes() // it works
      break;
    case 2:
      addToCart() // it works
      break;
    case 3:
      showCart()  // it works //TODO ADD PRICES... somehow
      break;
    case 4:
      removeFromCart() //?
      break;
    case 5:
      checkout()
      break;
  }
}

console.log('\nHave a nice day (￣︶￣)')
