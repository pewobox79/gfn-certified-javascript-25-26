// init root element
const root = document.getElementById('root')

//style root element
root.style.fontSize = '2rem'
root.style.border = '1px solid black'
root.style.maxWidth = '500px'
root.style.margin = 'auto'

// inhalt füllen
//<p> , <div> , <h1>

//create relevant content elements
const heading = `<h1>SinglePage Application</h1>`
const div = `
<div>
    <h3>Meine einkaufsliste</h3>
    <ul>
        <li>Bananen</li>
        <li>Äpfel</li>
        <li>Birnen</li>
    </ul>
</div>
`

const subHeading = `
<p>das ist mein single page Demo</p>`

//rendering new elements
root.innerHTML = `${heading} ${subHeading} ${div}` 

//=> ab hier sind dann neue elemente in der dom verfügbar wie heading, subheading und div!!!!!
const allListItems = document.querySelectorAll('li')
console.log("listitems", allListItems)

// alle listen einträge sollen in roter schrift sein!


const myItems = {
    item1: "Haus",
    item2: "LKW",
    item3: "Auto",
}


allListItems.forEach((listItem, index) => {
    listItem.style.color = "red"
    listItem.style.listStyleType = 'none'
    listItem.innerText = myItems[`item${index+1}`]
})