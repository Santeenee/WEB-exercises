console.log("------------------")
console.log("REVERSING AN ARRAY")
console.log("------------------\n")

const reverseArray = (arr) => {
    let reversedNewArray = []

    for (let i = arr.length-1; i >= 0; i--) {
        reversedNewArray.push(arr[i])
    }

    return reversedNewArray
}


const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    //no need to return the array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
