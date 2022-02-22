const p = document.getElementsByClassName('pippo') //dinamic
const pqueryselectorall = document.querySelectorAll('.pippo') //static
p[2].remove()

console.log(p) //does update
console.log(pqueryselectorall) //doesn't update