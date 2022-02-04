
console.log("\n\nExercise BEAN COUNTING\n----------------------\n")

function countChar(str, character = 'B') {
  let countChar = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) 
      countChar++
  }
  //return how many uppercase symbols
  return `${countChar} '${character}' in '${str}'`
}

console.log(countChar("barBagianni BBB"))  // -> 4
console.log(countChar("barBagianni"))      // -> 1

let character = "aa"
do {
  character = prompt("Inserisci 1 carattere da cercare: ")
} while (character.length > 1 || !isNaN(character));

console.log(countChar("Il barBagianni vive nel bosco", character)) // -> 0
console.log(countChar("barBagianni", character)) // -> 3
