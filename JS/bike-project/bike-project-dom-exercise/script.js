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
let electricBikes = { 'Electric Bikes': bikeArr1 }
let standardBikes = { 'Standard Bikes': bikeArr2 }

let categoryArr = [electricBikes, standardBikes]

let bikeCatalog = { categoryArr }

//* DOM STUFF
const main = document.querySelector('main')

const btns = document.querySelectorAll('button')
// const btnAdd = document.querySelector('#add-bike-btn')
// const btnPreorder = document.querySelector('#preorder-bike-btn')
// const btnRemove = document.querySelector('#remove-bike-btn')

//* FUNCTIONS

// function addBike() {

// }

// function preorderBike() {

// }

// function removeBike() {

// }

function addCategory() {
  //? maybe the use of createElement here doesn't make any sense
  //? To better control the behaviour of the button, I think it's
  //? better to set display to 'none' on the container of the form
  //? and than toggle the display 'none/block' in this function

  let divAComparsa = document.getElementById('add-category-a-comparsa')
  divAComparsa.classList.toggle('hidden')
  //* that's waaay better
}

function printCatalog() {
  // console.log('%cCatalog:', "font-size: x-large")
  // console.log(JSON.stringify(categoryArr, null, 4));

  //* new part
  let divCategory
  let hr
  let heading2
  let divContainerImages

  for (category of categoryArr) {

    divCategory = document.createElement('div')
    divCategory.classList.add('category')
    //? divCategory.id = ?;

    hr = document.createElement('div')
    hr.classList.add('hr')

    heading2 = document.createElement('h2')
    heading2.textContent = '<Category>' //placeholder when script throws error

    divContainerImages = document.createElement('div')
    divContainerImages.classList.add('container-images')

    for (singleCategory of Object.values(category)) {
      for (bikeObj of singleCategory) {

        heading2.textContent = Object.keys(category)[0]

        let bikeWrapper = document.createElement('div')
        bikeWrapper.classList.add('bike-wrapper')

        let bikeImg = document.createElement('img')
        bikeImg.src = bikeObj.src

        let bikeNameP = document.createElement('p')
        bikeNameP.classList.add('name-p')
        bikeNameP.textContent = bikeObj.name

        let bikeCategoryP = document.createElement('p')
        bikeCategoryP.classList.add('category-p')

        bikeWrapper.appendChild(bikeImg)
        bikeWrapper.appendChild(bikeNameP)
        bikeWrapper.appendChild(bikeCategoryP)
        divContainerImages.appendChild(bikeWrapper)
      }
    }
    divCategory.appendChild(hr)
    divCategory.appendChild(heading2)
    divCategory.appendChild(divContainerImages)
    main.appendChild(divCategory)
  }
}

//* FUNCTION CALLS

printCatalog()

//* CLICK LISTENERS ON BUTTONS
let buttons = Array.from(btns)
for (let btn of buttons) { //do not remove 'let'
  btn.addEventListener('click', () => {
    if (btn.id === 'add-category-btn') addCategory()

    // if (btn.id === 'add-bike-btn') addBike()
    // else if (btn.id === 'preorder-bike-btn') preorderBike()
    // else if (btn.id === 'remove-bike-btn') removeBike()
  }/*, { once: true }*/)
}