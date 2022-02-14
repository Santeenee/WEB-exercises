let list = {}

//* RECURSION
function arrayToList(arr, flag = true, restObj = {}) {

  //first time calling arrayToList()
  if (flag) {
    restObj.value = arr[arr.length - 1]
    restObj.rest = null
    console.log(restObj)
    return arrayToList(arr, false, restObj)
  }

  //last time calling arrayToList()
  if (arr.length == 0) {
    console.log('return undefined: ' + restObj)
    return list
  }

  restObj.value = arr[arr.length - 1]
  restObj.rest = Object.assign({}, restObj)

  console.log(restObj)

  list = Object.assign({}, restObj)

  arr.pop() //removes last value
  return arrayToList(arr, false)
}

console.log(arrayToList([1, 2, 3, 4, 5, 6]))