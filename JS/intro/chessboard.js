let size = 8  //change 
let str = '#' //change

let row = ''

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    row = ''
    for (let j = 0; j < size; j++) {
      row += (j % 2 === 0) ? ' ' : str
    }
    console.log(row)
  } else {
    row = ''
    for (let k = 0; k < size; k++) {
      row += (k % 2 === 0) ? str : ' '
    }
    console.log(row)
  }
}