//Aufgabe:

//1. neue inputfelder erstellen um title und body eines neuen artikels zu erfassen.
//2. die felder müssen in JS eingelesen werden

const titleInput = document.getElementById('title')
const bodyInput = document.getElementById('body')
const postBtn = document.getElementById('postSubmit')
const outputElement = document.getElementById('output')
const postForm = document.getElementById('postForm')

let postData = {
    title: '',
    body: ''
}

titleInput.value = postData.title
bodyInput.value = postData.body
function handlePostChange(e) {
    const { name, value } = e.target
    postData = {
        ...postData,
        [name]: value
    }
}

async function apiRequset(data) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const config = {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }

    try {
        const res = await fetch(url, config)
        if (!res.ok) {
            return null
        }
        return await res.json()

    } catch (err) {

        throw Error(`Network error ${err?.message}`)

    }


}

async function sendPostData(e) {
    postBtn.disabled = true
    e.preventDefault()
    const res = await apiRequset(postData)

    if (res) {
        outputElement.innerText = "Something went wrong"
        return
    }

    outputElement.innerText = `Der Artikel mit dem Title ${res.title} ist erfolgreich gespeichert worden!`

    postData = {
        title: "",
        body: ""
    }

    postForm.reset()
    
    
}
titleInput.addEventListener('change', handlePostChange)
bodyInput.addEventListener('change', handlePostChange)
postBtn.addEventListener('click', sendPostData)
