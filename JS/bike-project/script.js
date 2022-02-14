//* DATA, BINDINGS, ARRAYS
const bikes = [
  { id: 1, category: "Electric Bikes", name: "Rad Rover" },
  { id: 2, category: "Electric Bikes", name: "Rad Rover Step-thru" },
  { id: 3, category: "Standard Bikes", name: "7 Speed Cruiser" },
  { id: 4, category: "Standard Bikes", name: "7 Speed Step-Thru Cruiser" }
]

let cart = [] //[{idBike, quantity}, ...]
const fullDayRates = [75, 35]

//* CSS
let h2 = 'font-size: x-large;' //large, x-large, xx-large
let padding = 'padding: 10px 12px;'
let margin = 'margin: 5px 0;'
let radius = 'border-radius: 8px;'
let warn = `background: yellow; color: black; ${padding} ${margin} ${radius}`

//* FUNCTIONS
function menu() {
  let menuToPrint =
    "\n%cChoose%c\n" +
    "    1: bikes list\n" +
    "    2: add a bike to the cart\n" +
    "    3: show cart\n" +
    "    4: remove bike from cart\n" +
    "    5: checkout\n" +
    "other: exit\n"
  console.log(menuToPrint, `font-weight: bold`, '')
}

function printBikes() { // 1
  console.clear()
  console.log("%cBIKES LIST", h2);

  if (bikes.length === 0) {
    console.warn('There are no bikes')
    return //better than using 'else'
  }

  let toPrint = '┌───────────────────────────────────────────────────────────────\n'
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

function addToCart() { // 2

  printBikes()

  let x = 0 // = bikeChoice
  do {
    x = Number(prompt('Choose bike to ADD typing its ID (1-4)', '1'))
  } while (!(x >= 1 && x <= 4) || isNaN(x));
  let bikeChoice = x

  let quantity = 0
  do {
    quantity = Number(prompt('Choose quantity', '2'))
  } while (quantity <= 0 || isNaN(quantity));

  let isInCart = false
  for (let item of cart) {

    //if (item already exists in cart)
    //then increment quantity
    if (bikeChoice == item.idBike) {
      item.quantity += quantity
      isInCart = true
    }
  }
  if (!isInCart) {
    cart.push({ 'idBike': bikeChoice, 'quantity': quantity })
  }
  console.log('%cItems added to cart', `background: green; color: black; ${padding} ${margin} ${radius}`)
}

function showCart() { // 3
  console.clear()
  console.log("%cCART", h2);

  if (cart.length === 0) {
    console.log('%cThe cart is empty', warn);
    return
  }

  let toPrint = '┌─────────────────────────────────\n'
  for (let item of cart) {
    for (let bike of bikes) {
      if (item.idBike == bike.id) {
        toPrint += `│ ${item.quantity} x "${bike.name}"\n`
      }
    }
  }
  toPrint += '└─────────────────────────────────'
  console.log(toPrint)
}

function removeFromCart() { // 4
  printBikes()

  if (cart.length === 0) {
    console.log('%c The cart is empty ', warn);
    return
  }

  let x = 0
  do {
    x = Number(prompt('Choose bike to REMOVE typing its ID (1-4)', '1'))
  } while (!(x >= 1 && x <= 4) || isNaN(x));
  let bikeChoice = x

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      if (cart.length != 0) { //?
        if (cart[i].idBike == bikeChoice && cart[i].idBike == bikes[j].id) { //!
          tempQuantity = cart[i].quantity
          tempBikeName = bikes[j].name
          cart.splice(i, 1)
          console.log(`%c${tempQuantity} x "${tempBikeName}" removed`, warn)
        }
      }
    }
  }
}

function checkout() { // 5
  showCart()

  //tot money
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
  console.log(`Total amount: %c${total}$`, `background: hsl(200 100% 20%); font-weight: bold; ${padding} ${margin} ${radius}`)
}


//* EXECUTE
let userChoice = 1
while (userChoice >= 1 && userChoice <= 5) {

  menu()

  userChoice = parseInt(prompt('Choose menu item', "1"), 10)

  switch (userChoice) {
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
      //! BUG -> trying to remove a bike when there are more than one generates exception
      removeFromCart()
      break;
    case 5:
      checkout()
      break;
  }
}

console.clear()
checkout()
console.log('%cBye, have a nice day (￣︶￣)', `background: green; ${padding} ${margin} ${radius}`)
