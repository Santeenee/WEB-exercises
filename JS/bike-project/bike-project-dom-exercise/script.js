//* DATA

// BIKE OBJECTS
let RadRover = {
  id: 1,
  name: "Rad Rover",
  category: "Electric Bikes",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603490610597-BNTQH3MHP03CUX6P79IO/DSC_0067.jpg?format=500w"
}
let RadRoverStepThru = {
  id: 2,
  name: "Rad Rover Step-thru",
  category: "Electric Bikes",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603490921238-0ERHSU04WKO1TXB0STLD/DSC_0073.jpg?format=500w"
}
let SpeedCruiser = {
  id: 3,
  name: "7 Speed Cruiser",
  category: "Standard Bikes",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603493727812-QBU7JHQ55ULJ44GK4Z37/DSC_0085.jpg?format=500w"
}
let SpeedCruiserStepthru = {
  id: 4,
  name: "7 Speed Step-Thru Cruiser",
  category: "Standard Bikes",
  src: "https://images.squarespace-cdn.com/content/v1/5642736de4b07810c0a82ac8/1603491281593-QFMINPNCNSGNZFN1TCPG/DSC_0094.jpg?format=500w"
}

// BIKE ARRAYS
let bikeArr1 = [RadRover, RadRoverStepThru]
let bikeArr2 = [SpeedCruiser, SpeedCruiserStepthru]

// BIKE CATEGORY
let electricBikes = { bikeArr1 }
let standardBikes = { bikeArr2 }

let categoryArr = [electricBikes, standardBikes]

let bikeCatalog = { categoryArr }

//* DOM STUFF
const main = document.querySelector('main')




//* FUNCTIONS

function printCatalog() {
  // console.log('%cCatalog:', "font-size: x-large")
  // console.log(JSON.stringify(categoryArr, null, 4));

  //* new part
  let divCategory
  let heading2
  let divContainerImages

  for (category of categoryArr) {

    divCategory = document.createElement('div')
    // divCategory.classList.add('category')
    //? divCategory.id = ?;

    heading2 = document.createElement('h2')
    heading2.textContent = '<Category>'
    divCategory.appendChild(heading2)

    divContainerImages = document.createElement('div')
    divContainerImages.classList.add('container-images')

    for (singleCategory of Object.values(category)) {
      for (bikeObj of singleCategory) {
        // if (bikeObj.category === 'Electric Bikes') {
        // } else if (bikeObj.category === 'Standard Bikes') {
        // }
        let bikeDiv = document.createElement('div')

        let bikeImg = document.createElement('img')
        bikeImg.src = bikeObj.src

        let bikeNameP = document.createElement('p')
        bikeNameP.classList.add('name-p')
        bikeNameP.textContent = bikeObj.name

        let bikeCategoryP = document.createElement('p')
        bikeCategoryP.classList.add('category-p')
        bikeCategoryP.textContent = bikeObj.category

        bikeDiv.appendChild(bikeImg)
        bikeDiv.appendChild(bikeNameP)
        bikeDiv.appendChild(bikeCategoryP)
        divContainerImages.appendChild(bikeDiv)
      }
    }
    divCategory.appendChild(divContainerImages)
    main.appendChild(divCategory)
  }
}

//* FUNCTION CALLS

printCatalog()
