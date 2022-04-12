//* example 1 SETTIMEOUT
// setTimeout(() => {
//   console.log('executed after 3 seconds')
// }, 3000);

// console.log('I like non-blocking code')

//* example 2 PROMISES
const count = false

let countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve('promise fullfilled yee')
  } else {
    reject('promis rejected. no yeee')
  }
})

//* example 3 THEN & CATCH (& finally poreto)
countValue
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log("\"" + error + "\" caught")
  })
  .finally(() => {
    console.log('finally')
  })

//* example 4 ASYNC AWAIT
async function f() {
  console.log('async function')
  return Promise.resolve(1)
}

f().then(result => {
  console.log(result)
})


//* example 5 ASYNC AWAIT
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('promise resolved')
  }, 4000)
})

async function asyncFunction() {
  let result = await promise;

  console.log(result)
  console.log('helleu')
}

asyncFunction()

//* Promise.all
//awaita tutte le promise passate in un array come argomento, poi chiami il .then e .catch

