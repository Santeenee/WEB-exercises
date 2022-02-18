//* DATA

// BIKE OBJECTS
let RadRover = { id: 1, name: "Rad Rover" }
let RadRoverStepThru = { id: 2, name: "Rad Rover Step-thru" }
let SpeedCruiser = { id: 3, name: "7 Speed Cruiser" }
let SpeedCruiserStepthru = { id: 4, name: "7 Speed Step-Thru Cruiser" }

// BIKE ARRAYS
let bikeArr1 = [RadRover, RadRoverStepThru]
let bikeArr2 = [SpeedCruiser, SpeedCruiserStepthru]

// BIKE CATEGORY
let electricBikes = { bikeArr1 }
let standardBikes = { bikeArr2 }

let categoryArr = [electricBikes, standardBikes]

let bikeCatalog = { categoryArr }

//* FUNCTIONS

function printCatalog() {
  console.log('%cCatalog:', "font-size: x-large")
  console.log(JSON.stringify(categoryArr, null, 4));
}

async function getBikes(bikeJSON) {

  const response = await fetch(bikeJSON)

  if (!response.ok) { //if status code !(200-299) then
    throw new Error('cannot fetch data ＞︿＜')
  }

  const data = await response.json()

  return data
}

function addObjToBikeArr(arr, data, bikeJSON) {
  for (let i = 0; i < arr.length; i++) {
    var lastId = parseInt(arr[i].id, 10)
  }

  arr.push({ id: (lastId + 1), name: data[bikeJSON].name })
}

//* FUNCTION CALLS

printCatalog()

getBikes('bikes.json')
  .then(data => {
    for (let bikeJSON in data) {
      switch (data[bikeJSON].category) {
        case 'Electric Bikes':
          addObjToBikeArr(bikeArr1, data, bikeJSON)
          break;

        case 'Standard Bikes':
          addObjToBikeArr(bikeArr2, data, bikeJSON)
          break;

        default:
          addObjToBikeArr(bikeArr2, data, bikeJSON)
          break;
      }
    }
    console.log('BIKES ADDED TO CATALOG') //!
    printCatalog()
  })
  .catch(err => console.log(`rejected: %c${err.message}`, 'background:red; color:white'))
