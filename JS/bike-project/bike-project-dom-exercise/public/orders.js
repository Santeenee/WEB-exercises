function retrieveOrders() {
  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore()

  db.collection("orders")
    .orderBy("timestamp", "desc")
    .get()
    .then(querySnapshot => {
      //for every document
      querySnapshot.forEach(doc => printOrdersFromDb(doc))
    })
    .catch(err => {
      console.error(err)
    })
}

function printOrdersFromDb(doc) {
  const main = document.querySelector('main')
  let orderName = doc.id
  let order = doc.data()

  console.log(orderName)
  console.log(JSON.stringify(order, null, 4));

  let nDays = order['nDays']
  // let timestamp = order['timestamp']
  let tot = order['tot']

  let orderContainer = document.createElement('div')
  orderContainer.classList.add('order-container')

  let orderTitle = document.createElement('h3')
  orderTitle.classList.add('order-title')
  orderTitle.innerText = orderName

  let pNDays = document.createElement('p')
  if (nDays == 1) {
    pNDays.innerText = 'Bici prenotate per: ' + nDays + ' giorno'
  } else {
    pNDays.innerText = 'Bici prenotate per: ' + nDays + ' giorni'
  }

  let pTot = document.createElement('p')
  pTot.innerText = 'Totale: ' + tot + '€'

  orderContainer.appendChild(orderTitle)
  orderContainer.appendChild(pNDays)
  orderContainer.appendChild(pTot)

  let bikeOrderWrapper
  for (let bike of order["bikes"]) {
    bikeOrderWrapper = document.createElement('div')
    bikeOrderWrapper.classList.add('flex-row-between')

    let pName = document.createElement('p')
    pName.innerText = bike.name

    let pBikeAmount = document.createElement('p')
    pBikeAmount.innerText = bike.nBikes

    bikeOrderWrapper.appendChild(pName)
    bikeOrderWrapper.appendChild(pBikeAmount)
    orderContainer.appendChild(bikeOrderWrapper)
  }

  main.appendChild(orderContainer)
}

window.addEventListener('load', () => {
  retrieveOrders()
})