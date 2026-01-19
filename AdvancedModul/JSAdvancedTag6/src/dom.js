// call all relevant elements! All relevanten Elemente werden initial aufgerufen
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const allP = document.querySelectorAll('p')
const allMainId = document.querySelectorAll('#main')
const allSectionClass = document.querySelectorAll('.section')

console.log("das ist meine h1 aus der Dom", h1)
console.log("p select", p)
console.log("p all ", allP)
console.log("all mainID Elements", allMainId)
console.log("all section class elements", allSectionClass)

//Verarbeiten der elemente
// nur die IDs aus allen <p> elementen auslesen

allP.forEach(element => {
    const output = {
        id: element.id,
        text: element.innerText, // nur purer text
        html: element.innerHTML // inkl. html formatierung
    }
     console.log(output)
})

//manipulieren der elemente => ACHTUNG ASYNC , die innerText werden erst nachdem das neue output erstellt wird, verändert!!! somit noch alte daten in dem output in zeile 23
allP.forEach(element => element.innerText = "neuer text")



