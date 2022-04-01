//localstorage object can be used t store data in browser in a way that survives page refresh

//this objects allows you to file string values under names

//usato per associare una key ad un valore stringa. fine. abbastanza limitato ma utile

//indexedDB, database document based
//ci sono tanti framework tipo Firebase che hanno una struttura molto simile a questa e che permettono di 
//sincronizzare i cambiamenti con indexedDB

//è caduto in disuso (deprecated) web SQL 

const addBtn = document.querySelector('[data-add-John-btn]');
const removeBtn = document.querySelector('[data-remove-John-btn]');

addBtn.addEventListener('click', () => {
  localStorage.setItem('name', 'John');
  console.log(localStorage.getItem('name'));
  // -> John
})

removeBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  console.log(localStorage.getItem('name'));
  // -> null
})