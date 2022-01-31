function countChar(str, symbol = 'B') {
  let countSymbol = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      countSymbol++
    }
  }
  return countSymbol
  //return how many uppercase symbols
}

console.log(countChar("barBagianni BBB"))  // -> 4
console.log(countChar("barBagianni"))      // -> 1

console.log(countChar("barBagianni", 'n'))      // -> 2
console.log(countChar("barBagianni", 'a'))      // -> 3