
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

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// ------------------------------------- printCatalog --------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

function printCatalog() {
  // console.log('%cCatalog:', "font-size: x-large")
  // console.log(JSON.stringify(categoryArr, null, 4));

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

      let justAContainer = document.createElement('div')

      let bikeWrapper = document.createElement('div')
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
      justAContainer.appendChild(bikeWrapper)
      justAContainer.appendChild(selectBtnWrapper)
      divContainerImages.appendChild(justAContainer)
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