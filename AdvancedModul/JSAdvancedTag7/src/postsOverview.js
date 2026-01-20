const root = document.getElementById('root')
console.log("root", root)

/**
 * 1. fetch aller posts von https://jsonplaceholder.typicode.com/posts
 * 2. post element ausgabe erstellen mit styling
 * 3. dynamische ausgabe der einzelnen posts als post element
 * 4. read/unread button final hinzufügen => visuell markieren des artikel 
 */

//1. Fetsch Daten
const DOMAIN_URL = 'https://jsonplaceholder.typicode.com'

const getAllPosts = async ()=>{
    const postsUrl = `${DOMAIN_URL}/posts`;
    try{
        const res = await fetch(postsUrl)
        if(!res.ok){
            throw Error("Fetch failed")
        }
        return await res.json()

    }catch(err){
        console.log("error", err)
        throw Error("network error")
    }
}

//2. Element für Postausgabe in JS bauen
const createPostItemElement =(post)=>{
    const {title:postTitle, body:postBody} = post;

    // 1. Element in JS initialisieren
    const wrapperDiv = document.createElement('div')
    const innerDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const title = document.createElement('h3')
    const body = document.createElement('p')
    const button = document.createElement('button')

    //2. styling
    wrapperDiv.className = 'articleItemWrapper'
    innerDiv.className = 'articleItemInner'
    contentDiv.className ='articleContent'
    button.className = 'articleBtn'

    //3. context 
    const buttonDefaultContent = 'mark as read'
    title.innerText= postTitle
    body.innerText = postBody
    button.innerText = buttonDefaultContent

    //4. elemente verbinden
    contentDiv.append(title, body)
    innerDiv.append(contentDiv, button)
    wrapperDiv.appendChild(innerDiv)

    //5. event
    innerDiv.addEventListener('click', ()=>{
        const state= 'read'
        if(wrapperDiv.className.includes(state)){
            wrapperDiv.classList.remove(state)
            button.innerText = buttonDefaultContent
            title.style.textDecoration = 'none'
            body.style.textDecoration = 'none'
            
        }else{
            wrapperDiv.classList.add(state)
            button.innerText = "unread"
            title.style.textDecoration = 'line-through'
            body.style.textDecoration = 'line-through'
        }

    })
    root.append(wrapperDiv)
}


//loop over data and render elements
getAllPosts().then(data => {
    data.forEach(post=> {
        createPostItemElement(post)
    })
})
