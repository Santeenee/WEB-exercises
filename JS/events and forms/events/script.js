const btn = document.querySelector('button')
const body = document.querySelector('body')

function btnClick() {
  console.log('handler for button')
  btn.removeEventListener('click', btnClick)
}

btn.addEventListener('click', btnClick)

body.addEventListener('click', (event) => {
  console.log('handler for body')
  if (event.target.nodeName === "BUTTON") {
    console.log(`You clicked ${event.target.nodeName}`)
  }
})

window.addEventListener('click', () => {
  console.log('handler for window')
});