let list = {}
let arr = []

function prettyPrintObj(obj) {
  console.log(JSON.stringify(obj, null, 4));
}

//* RECURSION (～￣▽￣)～
function arrayToList(arr, firstCall = true) {

  //first time calling arrayToList()
  if (firstCall) {
    list.value = arr.pop() // removes last value
    list.rest = null    

    return arrayToList(arr, false)
  }

  // last time calling arrayToList()
  if (arr.length === 0) return list

  //every other time calling arrayToList()
  list.rest = Object.assign({}, list)
  list.value = arr.pop() // removes last value

  return arrayToList(arr, false)
}

//* RECURSION (～￣▽￣)～
function listToArray(list, obj = Object.assign({}, list)) {

  arr.push(obj.value)

  if (obj.rest === null) return

  obj = Object.assign({}, obj['rest'])

  listToArray(list, obj)
}

arrayToList([10, 20, 30])
listToArray(list)
prettyPrintObj(list)
console.log(arr)

//! for some reason arr is undefined...
// console.log(listToArray(arrayToList([10, 20, 30])))
