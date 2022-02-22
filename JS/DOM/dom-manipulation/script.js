const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

//* MY CODE HERE

const divContainer = document.getElementById('mountains')

const table = document.createElement('table')

let row = document.createElement('tr')

let cell1 = document.createElement('th')
let cell2 = document.createElement('th')
let cell3 = document.createElement('th')

cell1.textContent = 'name'
cell2.textContent = 'height'
cell3.textContent = 'place'

row.appendChild(cell1)
row.appendChild(cell2)
row.appendChild(cell3)
table.appendChild(row)

for (obj of MOUNTAINS) {
  let row = document.createElement('tr')

  let cell1 = document.createElement('td')
  let cell2 = document.createElement('td')
  let cell3 = document.createElement('td')

  cell1.textContent = obj.name
  cell2.textContent = obj.height
  cell3.textContent = obj.place

  row.appendChild(cell1)
  row.appendChild(cell2)
  row.appendChild(cell3)
  table.appendChild(row)
}

divContainer.appendChild(table)