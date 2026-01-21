//Aufgabe:

//1. neue inputfelder erstellen um title und body eines neuen artikels zu erfassen.
//2. die felder müssen in JS eingelesen werden

const titleInput = document.getElementById('title')
const bodyInput = document.getElementById('body')
const postBtn = document.getElementById('postSubmit')
const outputElement = document.getElementById('output')
console.log(titleInput, bodyInput)

let postData ={
    title: '',
    body: ''
}
function handlePostChange(e){
    const {name, value} = e.target
    postData ={
        ...postData,
        [name]:value
    }
}

async function apiRequset(data){

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const config ={
        method: 'POST',
        headers:{
            'content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify(data)
    }

    try{
        const res = await fetch(url, config)
        if(!res.ok){
            throw Error('something went wrong')
        }
        return await res.json()

    }catch(err){

        throw Error(`Network error ${err?.message}`)

    }


}

async function sendPostData(e){
    e.preventDefault()
    const res = await apiRequset(postData)

    if(!res){
        outputElement.innerText = "Something went wrong"
    }

    outputElement.innerText = `Der Artikel mit dem Title ${res.title} ist erfolgreich gespeichert worden!`

    console.log("res api", res)
}

titleInput.addEventListener('change', handlePostChange)
bodyInput.addEventListener('change', handlePostChange)
postBtn.addEventListener('click', sendPostData)
