// SPA Experience (SinglePageAppliction)
const root = document.getElementById('root')

const context = `<h1 id='heading'>hallo</h1>`
root.innerHTML = context

const headingElement = document.getElementById('heading')


// Erstellen von Elementen
const section = document.createElement('section')
const div = document.createElement('div')
const p = document.createElement('p')
const button = document.createElement('button')

//add styling to elements
button.className = 'btn activeColor'


//=> manipulate classes
button.classList.add('headingStyle')
button.classList.remove('activeColor')
// equvalent === button.className +=' headingStyle'



//add context to elements
div.innerHTML = `<h3>Section1</h3>`
button.innerText = 'Click me'
p.innerHTML =`Mein neues <span style='color: green'>Auto</span> ist hervorragend! Fährt sich gut`


// append elements
div.append(p, button)
section.append(div)

root.appendChild(section)

