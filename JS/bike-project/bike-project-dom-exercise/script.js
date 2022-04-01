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

function preorderBike() {
  let divAComparsa = document.getElementById('preorder-bike-a-comparsa')
  divAComparsa.classList.toggle('hidden')
}

// function removeBike() {

// }

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

// function addCategory() {
//   let divAComparsa = document.getElementById('add-category-a-comparsa')
//   divAComparsa.classList.toggle('hidden')
// }

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

        let bikeWrapper = document.createElement('button')
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

//* CLICK LISTENERS ON BUTTONS
let buttons = Array.from(btns)
for (let btn of buttons) { //do not remove 'let'
  btn.addEventListener('click', () => {
    hideForms()
    // if (btn.id === 'add-bike-btn') addBike()
    // else if (btn.id === 'add-category-btn') addCategory()

    /*else*/ if (btn.id === 'preorder-bike-btn') preorderBike()
    // else if (btn.id === 'remove-bike-btn') removeBike()
  }/*, { once: true }*/)
}

//?
window.addEventListener('load', () => {
  printCatalog()
})

//========================================//
//            local storage
//========================================//

let list = document.querySelector("select");
let note = document.querySelector("textarea");

let state;
function setState(newState) {
  list.textContent = "";
  for (let name of Object.keys(newState.notes)) {
    let option = document.createElement("option");
    option.textContent = name;
    if (newState.selected == name) option.selected = true;
    list.appendChild(option);
  }
  note.value = newState.notes[newState.selected];

  localStorage.setItem("Notes", JSON.stringify(newState));
  state = newState;
}

setState(JSON.parse(localStorage.getItem("Notes")) || {
  notes: { "shopping list": "Carrots\nRaisins" },
  selected: "shopping list"
});

list.addEventListener("change", () => {
  setState({ notes: state.notes, selected: list.value });
});

note.addEventListener("change", () => {
  setState({
    notes: Object.assign({}, state.notes,
      { [state.selected]: note.value }),
    selected: state.selected
  });
});

document.querySelector("[data-btn-add-to-cart]")
  .addEventListener("click", () => {
    let name = prompt("Note name");
    if (name) setState({
      notes: Object.assign({}, state.notes, { [name]: "" }),
      selected: name
    });
  });