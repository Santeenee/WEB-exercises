let arrays = [[1, 2, 3], [4, 5], [6]]

//*recap
//`filter()` filtra tutti i parametri che passano un test

//`map()` modifica tutti i parametri tramite una callback func ritornando un array e volendo modifica anche l'obj che itera

//`reduce()`  applies a function to every item of an array and accumulates the result iteratively
//reduce è utile quando devo prendere due parametri nell'array (uno è dopo l'altro)

//`concat` merges arrays

//*my code
// let cleanArray = arrays.map(
//   r => r.reduce((previous, current) => previous + current ))

// -> [6, 9, 6] mmhh, not quite there

let cleanArray = arrays.reduce((prev, current) => prev.concat(current))

console.log(cleanArray)
// -> [1, 2, 3, 4, 5, 6]