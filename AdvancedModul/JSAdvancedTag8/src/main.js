//Client Input und Verarbeitung

//1. überschrift aus JS anpassen

const heading = document.querySelector('h1')
console.log('heading', heading.innerText = "neuer text")

//EXKURS zu alternativen für element nach JS ziehen
const headingByClass = document.getElementsByClassName('heading')
console.log('classname', headingByClass[0]);
const pList = document.getElementsByTagName('p')
//const pList = document.getElementsByTagName('p')
Array.from(pList).map((item, index) => {
    (index + 1) % 2 ? item.style.color = "red" : item.style.backgroundColor = 'green'
})

// Änderung des Heading innertextes durch client ermöglichen
const inputField = document.getElementById('headingInput')

function updateHeading(e){
    const {value, name} = e.target;
    console.log("name", name)
    heading.innerText = value
}

inputField.addEventListener('change', updateHeading)