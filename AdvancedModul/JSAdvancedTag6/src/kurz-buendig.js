const selectOne = (qs) => document.querySelector(qs);
const selectAll = (qs) => Array.from(document.querySelectorAll(qs));
const $$alter = (qs) => document.querySelectorAll(qs)
const listItems = selectAll('li')
const h1 = selectOne('h1')
const alterListItems = $$alter('li')

console.log("listitem", listItems)
console.log("listitem", alterListItems)

const newListItems = listItems.map(item=>{
    return "hallo"
})

















const selectedDiv =selectOne('div')
console.log("div", selectedDiv)