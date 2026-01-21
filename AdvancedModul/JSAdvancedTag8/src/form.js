// Element nach JS holen

const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')

const submitButton = document.getElementById('submitBtn')

//store userData
let userData = {
    firstname: '',
    lastname: '',
    email: ''
}

function handleChange(e) {
    const { value, name } = e.target
    console.log(name, value)
    //userData[name] = value {ist nicht falsch}
    userData = {
        ...userData, 
        [name]: value
    }
    console.log("userData updated", userData)
}


function handleSubmit(e){
    e.preventDefault() // => verhindert der reload der seite!
    const outputContext = `${userData.firstname} ${userData.lastname} hat sich mit seiner email adresse ${userData.email} registriert`
    alert(outputContext)
}

// Events zuweisen
firstNameInput.addEventListener("change", handleChange)
lastNameInput.addEventListener("change", handleChange)
emailInput.addEventListener("change", handleChange)
submitButton.addEventListener("click", handleSubmit)