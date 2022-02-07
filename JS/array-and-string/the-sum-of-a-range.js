console.log("------------------")
console.log("THE SUM OF A RANGE")
console.log("------------------\n")

const range = (start, end, step = 1) => {
    let numArray = []

    if(step < 1 && step !== 0) {
        for (let i = 0; i < end/-step; i++) { 
            numArray[i] = end + (i * step)      
        }
    } else {
        for (let i = 0; i < end/step; i++) { 
            numArray[i] = start + (i * step)      
        }
    }

    console.log(`L'array ha range ${start}-${end} procedendo per ${step} step`)
    console.log(numArray)
    return numArray
}

const sum = (numArray) => {
    let sumOfValues = 0

    for (let num of numArray) {
        sumOfValues += num
    }
    return sumOfValues
}

console.log("La somma dell'array vale: " + sum(range(1, 10)) + "\n");

console.log("La somma dell'array vale: " + sum(range(1, 10, 2)) + "\n");

console.log("La somma dell'array vale: " + sum(range(1, 7, 2)) + "\n");

console.log("La somma dell'array vale: " + sum(range(1, 8, -2)) + "\n");