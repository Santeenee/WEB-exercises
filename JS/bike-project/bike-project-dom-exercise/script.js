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

//* FUNCTIONS

function appearPreorderBike() {
  let divAComparsa = document.getElementById('preorder-bike-a-comparsa')
  divAComparsa.classList.toggle('hidden')
}

function checkout() {
  //calculate total
  alert('purchase done successfully (si, devo fare il resto)')
}

function emptyCart() {
  localStorage.clear()
  showCart()
}

function showCart() {
  let cart = document.getElementById('cart')

  //empty dom cart
  cart.replaceChildren()

  //controls if localstorage is empty
  let message = document.createElement('p')
  if (localStorage.length == 0) {
    message.id = 'p--empty-cart'
    message.innerHTML = 'Cart is empty,<br>choose a bike below'
    cart.appendChild(message)
  }

  //show items
  for (let i = 0; i < localStorage.length; i++) {
    let divWrapper = document.createElement('div')
    divWrapper.classList.add('flex-row-between')

    let bikeNameCart = document.createElement('p')
    let nBikesCart = document.createElement('p')

    bikeNameCart.textContent = Object.keys(localStorage)[i]
    nBikesCart.textContent = Object.values(localStorage)[i]

    divWrapper.appendChild(bikeNameCart)
    divWrapper.appendChild(nBikesCart)
    cart.appendChild(divWrapper)
  }
}

function addToCart() {
  let buttons = Array.from(btns)

  buttons.forEach(btn => {
    if (btn.classList.contains('selected')) {
      //find sibling select.value and bikename (=select.id)
      let bikeChosen = btn.parentElement.childNodes[1].childNodes[0].id
      let nBikes = btn.parentElement.childNodes[1].childNodes[0].value

      localStorage.setItem(bikeChosen, nBikes)
    }
  });

  showCart()
}

function hideForms() {
  let forms = document.querySelectorAll('form')
  for (let form of forms) {
    if (!form.classList.contains('hidden')) {
      form.classList.add('hidden')
    }
  }
}

// function addBike() {
//   //? maybe the use of createElement here doesn't make any sense
//   //? To better control the behaviour of the button, I think it's
//   //? better to set display to 'none' on the container of the form
//   //? and than toggle the display 'none/block' in this function

//   let divAComparsa = document.getElementById('add-bike-a-comparsa')
//   divAComparsa.classList.toggle('hidden')
//   //* that's waaay better
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
    //? divCategory.id = ?;

    hr = document.createElement('div')
    hr.classList.add('hr')

    heading2 = document.createElement('h2')
    heading2.textContent = Object.keys(category)[0]

    divPrice = document.createElement('div')
    let price = Object.values(category)[1]
    divPrice.textContent = 'Daily price: ' + price + '€'
    divPrice.classList.add('daily-price')

    divContainerImages = document.createElement('div')
    divContainerImages.classList.add('container-images')

    console.log(Object.values(category))
    console.log(Object.values(category)[0])

    for (bikeObj of Object.values(Object.values(Object.values(category))[0])) {

      let innocentDiv = document.createElement('div')

      let bikeWrapper = document.createElement('button')
      bikeWrapper.classList.add('bike-wrapper')

      let bikeImg = document.createElement('img')
      bikeImg.src = bikeObj.src

      let bikeNameP = document.createElement('p')
      bikeNameP.classList.add('name-p')
      bikeNameP.textContent = bikeObj.name

      //create select with id=nomebici
      //i vari option che vanno a 1 a 10 con value rispettive
      let selectWrapper = document.createElement('div') //! add to the dom
      let selectElem = document.createElement('select')
      selectElem.id = bikeObj.name
      for (let i = 0; i < 10; i++) {
        let optionElem = document.createElement('option')
        optionElem.value = i + 1
        optionElem.innerText = optionElem.value
        selectElem.appendChild(optionElem)
      }
      selectWrapper.appendChild(selectElem)

      bikeWrapper.appendChild(bikeImg)
      bikeWrapper.appendChild(bikeNameP)
      innocentDiv.appendChild(bikeWrapper)
      innocentDiv.appendChild(selectWrapper)
      divContainerImages.appendChild(innocentDiv)
    }
    divCategory.appendChild(hr)
    divCategory.appendChild(heading2)
    divCategory.appendChild(divPrice)
    divCategory.appendChild(divContainerImages)
    main.appendChild(divCategory)
  }
  // main.appendChild(hr)
  btnsEventListener()
  showCart()
}

function btnsEventListener() {
  let buttons = Array.from(btns)

  for (let btn of buttons) { //do not remove 'let'
    btn.addEventListener('click', () => {
      //hideForms()

      if (btn.id === 'preorder-bike-btn') appearPreorderBike()

      if (btn.classList.contains('bike-wrapper')) {
        btn.classList.toggle('selected')
      }

      if (btn.classList.contains('btn--add-to-cart')) addToCart()

      if (btn.classList.contains('btn--empty-cart')) emptyCart()

      if (btn.classList.contains('btn--checkout')) checkout()
    })
  }
}

window.addEventListener('load', () => {
  printCatalog()
})
