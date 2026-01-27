// TODO list
/* 
* 1. TODO Data {title, beschreibung, isDone}
* 2. eingabefeld für user 
* 3. jedes neue TODO soll im frontend als listeneintrag angezeigt werden
* 4. css einfügen 
* 5. BONUS: isDone auf alle todos gleichzeitig setzen
* 6. BONUS: delete todo
*/

//let toDoData = []
let newToDoData = {
    title: '',
    description: '',
    isDone: false
}


//ELEMENTE
const $ = (qs) => document.querySelector(qs);
const form = $('form')
const innerDiv = $('form div')
const titleInput = document.getElementById('titleInput')
const decriptionInput = document.getElementById('descriptionInput')
const toDoList = $('#toDoList ol')
const subBtn = document.getElementById('submitBtn')

console.log(toDoList.dataset.tooltip)
//styling
innerDiv.setAttribute('class', 'formInner')
titleInput.classList.add('input')
decriptionInput.classList.add('input')
subBtn.classList.add('btn')




// funktionen
async function addNewToDo(e) {
    e.preventDefault()
    if (!newToDoData.description || !newToDoData.title) {
        console.log("data invalid")
        return
    }
    const returnedDataFromServer = await sendNewTodoToServer(newToDoData) // anfrage an unseren eigenen server
    console.log("returned", returnedDataFromServer)
    //toDoData.push(newToDoData)
    form.reset()
    renderElements(returnedDataFromServer)
    //console.log("updated toDoData", toDoData)
}
function handleChange(event) {
    const { name, value } = event.target
    newToDoData = {
        ...newToDoData,
        [name]: value.trim()
    }
    //console.log("hallo handle", name, value)
}

function formatTodDataForServer(originData) {
    return { data: { newTodo: originData } }
}
async function sendNewTodoToServer(newTodo) {
    const SERVER_URL = 'http://localhost:3001/api/v1/todos'
    const dataFormated = formatTodDataForServer(newTodo)
    const config ={
        method: "POST", 
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(dataFormated)
    }
    try{
        const res = await fetch(SERVER_URL, config)
        const data = await res.json()
        console.log("data return von server", data)
        return data
    }catch(err){
        console.info("error happend", err)
    }

}
//element erstellen und rendern
function createToDoElement(toDo) {

    // TODO isDone noch finalisieren
    // init new elements
    const li = document.createElement('li')
    const titleElement = document.createElement('h4')
    const descriptionElement = document.createElement('p')

    //context hinzufügen
    titleElement.innerText = toDo.title;
    descriptionElement.innerText = toDo.description
    // zusammenbauen des li elements

    li.append(titleElement, descriptionElement)
    toDoList.append(li)
}
function renderElements(updateList) {
    toDoList.innerHTML = '';
    updateList.forEach(toDo => {
        createToDoElement(toDo)
    })
}


//events zuweisen
titleInput.addEventListener('change', handleChange)
decriptionInput.addEventListener('change', handleChange)
subBtn.addEventListener('click', addNewToDo)