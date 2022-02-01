console.log("Exercise MINIMUM\n----------------\n")

function min(a, b) {
  return (a < b) ? a : b;
}

console.log('Il minor numero tra 0 e 5 è:\t' + min(0, 5));     // → 0
console.log('Il minor numero tra 0 e -10 è:\t' + min(0, -10)); // → -10
