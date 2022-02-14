let list = {}

function prettyPrintObj(obj) {
  console.log(JSON.stringify(obj, null, 4));
}

//* RECURSION (～￣▽￣)～
function arrayToList(arr, firstCall = true) {

  //first time calling arrayToList()
  if (firstCall) {
    console.log()
    console.log(arr)
    console.log()

    list.value = arr[arr.length - 1]
    list.rest = null

    arr.pop() // removes last value

    return arrayToList(arr, false)
  }

  // last time calling arrayToList()
  if (arr.length === 0) return prettyPrintObj(list)

  //every other time calling arrayToList()
  list.rest = Object.assign({}, list)
  list.value = arr[arr.length - 1]

  arr.pop() // removes last value

  return arrayToList(arr, false)
}

arrayToList([1, 2, 3, 4, 5, 6])
