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
  let menuToPrint =
    '\nPress\n' +
    "    1: bikes list\n" +
    "    2: add a bike to the cart\n" +
    "    3: show cart\n" +
    "    4: remove bike from cart\n" +
    "    5: checkout\n" +
    "other: exit\n\n"
  console.log(menuToPrint)
  // console.log('\nPress')
  // console.log("    1: bikes list");
  // console.log("    2: add a bike to the cart");
  // console.log("    3: show cart");
  // console.log("    4: remove bike from cart");
  // console.log("    5: checkout");
  // console.log("other: exit\n");
}

function printBikes() {
  let toPrint = ''
  console.clear()
  // console.log(`\nBIKES LIST`)
  console.log("%cBIKES LIST", "font-size: x-large");

  // is bikes array empty?
  if (bikes.length === 0) {
    console.warn('There are no bikes')
    return //better than using 'else'
  }

  toPrint += '┌───────────────────────────────────────────────────────────────\n'
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
    toPrint += `│ ID[${bike.id}] (${bike.category}) "${bike.name}" daily: ${dailyPrice}$\n`
  }
  toPrint += '└───────────────────────────────────────────────────────────────'
  console.log(toPrint)
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
    cart.push({ 'idBike': bikeChoice, 'quantity': quantity })
  }
}

function showCart() {
  let toPrint = ''
  console.clear()
  // console.log('CART')
  console.log("%cCART", "font-size: x-large");


  if (cart.length === 0) {
    // console.warn("the cart is empty")
    console.log('%c The cart is empty ', 'background: yellow; color: black; padding: 10px;');
    return
  }

  toPrint += '┌─────────────────────────────────\n'
  for (let item of cart) {
    for (let bike of bikes) {
      if (item.idBike == bike.id) {
        toPrint += `│ ${item.quantity} "${bike.name}"\n`
      }
    }
  }
  toPrint += '└─────────────────────────────────'
  console.log(toPrint)
}

function removeFromCart() {
  printBikes()
  if (cart.length == 0) {
    // console.warn("the cart is empty")
    console.log('%c The cart is empty ', 'background: yellow; color: black');
    return
  }
  let bikeChoice = prompt('Choose bike to remove typing ID', '4')
  //TODO let quantity = prompt('Scegli QUANTITA', '2')

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      if (cart[i].idBike == bikeChoice && cart[i].idBike == bikes[j].id) { //??????????????????????????
        console.warn(`${cart[i].quantity} "${bikes[j].name}" removed`)
        cart.splice(i, 1)
      }
    }
  }
}

function checkout() {
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
  console.log(`Total amount: %c${total}$`, "background: hsl(200 100% 20%); font-weight: bold; padding: 10px;")
}


//* EXECUTE
let scelta = 1
while (scelta == 1 || scelta == 2 || scelta == 3 || scelta == 4 || scelta == 5) {

  menu()

  scelta = Number(prompt('Scegli una voce dal menu', "1"))
  //console.clear()

  switch (scelta) {
    case 1:
      printBikes()
      break;
    case 2:
      addToCart()
      break;
    case 3:
      showCart() //TODO ADD PRICES... somehow
      break;
    case 4:
      removeFromCart() //! it DOESN'T work
      break;
    case 5:
      checkout()
      break;
  }
}

console.log('%cHave a nice day (￣︶￣)', 'background: green; padding: 10px')
