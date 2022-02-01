console.log("\n\nExercise RECURSION\n------------------\n")

function isEven(n) {
  n = Math.abs(n)
  if (n === 0) {
    return `è pari`
  } else if (n === 1) {
    return 'è dispari'
  } else {
    return isEven(n - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
