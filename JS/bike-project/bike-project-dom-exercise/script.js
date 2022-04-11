//* DATA

// BIKE OBJECTS
let RadRover = {
  id: 1,
  name: "Rad Rover",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603490610597-BNTQH3MHP03CUX6P79IO/DSC_0067.jpg?format=500w"
}
let RadRoverStepThru = {
  id: 2,
  name: "Rad Rover Step-thru",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603490921238-0ERHSU04WKO1TXB0STLD/DSC_0073.jpg?format=500w"
}
let SpeedCruiser = {
  id: 3,
  name: "7 Speed Cruiser",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603493727812-QBU7JHQ55ULJ44GK4Z37/DSC_0085.jpg?format=500w"
}
let SpeedCruiserStepthru = {
  id: 4,
  name: "7 Speed Step-Thru Cruiser",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603491281593-QFMINPNCNSGNZFN1TCPG/DSC_0094.jpg?format=500w"
}

// BIKE ARRAYS
let bikeArr1 = [RadRover, RadRoverStepThru]
let bikeArr2 = [SpeedCruiser, SpeedCruiserStepthru]

// BIKE CATEGORY
let electricBikes = {
  'Electric Bikes': bikeArr1,
  dailyPrice: 85
}
let standardBikes = {
  'Standard Bikes': bikeArr2,
  dailyPrice: 35
}

let categoryArr = [electricBikes, standardBikes]

let bikeCatalog = { categoryArr }

//* DOM STUFF
const main = document.querySelector('main')

//querySelectorAll() doesn't update when you add a new element
const btns = document.getElementsByTagName('button')

let total = document.getElementById('total')
let days = document.getElementById('days')
let mySound = new Audio('./assets/sounds/mixkit-small-bike-bell-ding-1609.mp3')

//* FUNCTIONS

function calculateTotal(dailyPrice, nBikes) {
  let temp = total.innerText
  total.innerText = Number(total.innerText) + Number(days.value * dailyPrice * nBikes)
  console.log(`${temp} + ${days.value} * ${dailyPrice} * ${nBikes} = ${total.innerText}`)
}

function bikeDing() {
  //https://mixkit.co/free-sound-effects/bike/
  mySound.play()
}

function checkout() {
  //calculate total
  let isOrderConfirmed = false
  if (total.innerText != '0') {
    isOrderConfirmed = confirm('Sei sicuro di completare l\' ordine da ' + total.innerText + '€?')
  } else {
    alert('Il carrello è vuoto')
    return
  }

  if (isOrderConfirmed) {
    bikeDing()
    alert('Grazie per il tuo ordine!')
    emptyCart()
  } else {
    alert('Ordine annullato')
  }
}

function emptyCart() {
  localStorage.clear()
  total.innerHTML = Number(0)
  showCart()
}

function showCart(isChangeEventFired = false) {
  let cart = document.getElementById('cart')

  //empty dom cart
  cart.replaceChildren()

  //controls if localstorage is EMPTY
  if (localStorage.length == 0) {
    let message = document.createElement('p')
    message.id = 'p--empty-cart'
    message.innerHTML = 'Cart is empty,<br>choose a bike below'
    cart.appendChild(message)
  }

  if (isChangeEventFired) total.innerText = Number(0)

  //show items and calculate final price (total)
  for (let i = 0; i < localStorage.length; i++) {
    let divWrapper = document.createElement('div')
    divWrapper.classList.add('flex-row-between')

    let bikeNameCart = document.createElement('p')
    let nBikesCart = document.createElement('p')

    //show bike name in cart
    bikeNameCart.innerText = Object.keys(localStorage)[i]

    //separate nBikes and categoryDailyPrice
    let nBikesPlusDailyPrice = Object.values(localStorage)[i]
    let nBikesCartValue = nBikesPlusDailyPrice.split(' || ')[0]
    let dailyPrice = nBikesPlusDailyPrice.split(' || ')[1]

    //show number of that bike in cart
    nBikesCart.innerText = nBikesCartValue

    calculateTotal(dailyPrice, nBikesCartValue)

    divWrapper.appendChild(bikeNameCart)
    divWrapper.appendChild(nBikesCart)
    cart.appendChild(divWrapper)
  }
}

function addToCart(btn) {
  let bikeName = btn.dataset.addToCart
  let categoryDailyPrice = btn.dataset.categoryPrice
  let nBikes = btn.parentElement.childNodes[0].value

  localStorage.setItem(bikeName, nBikes + " || " + categoryDailyPrice)

  showCart()
}

//do not cancel me
// function hideForms() {
//   let forms = document.querySelectorAll('form')
//   for (let form of forms) {
//     if (!form.classList.contains('hidden')) {
//       form.classList.add('hidden')
//     }
//   }
// }

function printCatalog() {
  // console.log('%cCatalog:', "font-size: x-large")
  // console.log(JSON.stringify(categoryArr, null, 4));

  //* new part
  let divCategory
  let hr
  let heading2
  let divPrice
  let divContainerImages

  for (category of categoryArr) {

    divCategory = document.createElement('div')
    divCategory.classList.add('category')
    divCategory.id = Object.keys(category)[0]

    hr = document.createElement('div')
    hr.classList.add('hr')

    heading2 = document.createElement('h2')
    heading2.innerText = Object.keys(category)[0]

    divPrice = document.createElement('div')
    let price = Object.values(category)[1]
    divPrice.innerText = 'Daily price: ' + price + '€'
    divPrice.classList.add('daily-price')

    divContainerImages = document.createElement('div')
    divContainerImages.classList.add('container-images')

    for (bikeObj of Object.values(Object.values(Object.values(category))[0])) {

      let innocentDiv = document.createElement('div')

      let bikeWrapper = document.createElement('button')
      bikeWrapper.classList.add('bike-wrapper')

      let bikeImg = document.createElement('img')
      bikeImg.src = bikeObj.src

      let bikeNameP = document.createElement('p')
      bikeNameP.classList.add('name-p')
      bikeNameP.innerText = bikeObj.name

      //create select with id=nomebici
      //i vari option che vanno a 1 a 10 con value rispettive
      let selectBtnWrapper = document.createElement('div')
      selectBtnWrapper.classList.add('flex-row-1rem-gap')
      let selectElem = document.createElement('select')
      selectElem.id = bikeObj.name
      for (let i = 0; i < 10; i++) {
        let optionElem = document.createElement('option')
        optionElem.value = i + 1
        optionElem.innerText = optionElem.value
        selectElem.appendChild(optionElem)
      }
      selectBtnWrapper.appendChild(selectElem)

      let addToCartBtn = document.createElement('button')
      addToCartBtn.dataset.addToCart = `${bikeObj.name}`
      addToCartBtn.dataset.categoryPrice = `${price}`
      addToCartBtn.classList.add('btn', 'btn--primary', 'margin0')
      addToCartBtn.innerText = 'Add to cart'
      selectBtnWrapper.appendChild(addToCartBtn)

      bikeWrapper.appendChild(bikeImg)
      bikeWrapper.appendChild(bikeNameP)
      innocentDiv.appendChild(bikeWrapper)
      innocentDiv.appendChild(selectBtnWrapper)
      divContainerImages.appendChild(innocentDiv)
    }
    divCategory.appendChild(hr)
    divCategory.appendChild(heading2)
    divCategory.appendChild(divPrice)
    divCategory.appendChild(divContainerImages)
    main.appendChild(divCategory)
  }
  btnsEventListener()
  showCart()
}

function btnsEventListener() {

  let buttons = Array.from(btns)
  for (let btn of buttons) { //do not remove 'let'

    btn.addEventListener('click', () => {

      if (btn.classList.contains('bike-wrapper')) {
        btn.classList.toggle('selected')
      }

      // = button contains data-add-to-cart attribute
      if ('addToCart' in btn.dataset) {
        addToCart(btn)
      }

      if ('emptyCart' in btn.dataset) emptyCart()

      if ('checkout' in btn.dataset) checkout()
    })
  }
}

days.addEventListener('change', () => showCart(true))

window.addEventListener('load', () => {
  printCatalog()
})
