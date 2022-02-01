
console.log("\n\nExercise BEAN COUNTING\n----------------------\n")

function countChar(str, symbol = 'B') {
  let countSymbol = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol)
      countSymbol++
  }
  //return how many uppercase symbols
  return `${countSymbol} '${symbol}' in '${str}'`
}

console.log(countChar("barBagianni BBB"))  // -> 4
console.log(countChar("barBagianni"))      // -> 1

console.log(countChar("barBagianni", 'b')) // -> 0
console.log(countChar("barBagianni", 'a')) // -> 3