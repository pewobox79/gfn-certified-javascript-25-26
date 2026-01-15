// Promises exercise => daten für posts kommen vom "SERVER" mit Zeitverzögerung
const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts() {
    document.body.innerHTML = "updating postlist"
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<h2>${post.title}</h2>`
        })
        document.body.innerHTML = output

    }, 1000)
}

function createPost(newPost) {
    document.body.innerHTML = "new post in creation"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost)
            const error = false // hebel für den promise effect

            if (!error) {
                resolve()
            } else {
                reject("error: promise rejected")
            }

        }, 2000)

    })

}

createPost({ title: "mein post", body: "mein body" })
    .then(getPosts)
    .catch((error) => {
        document.body.innerHTML = `<div>${error}</div>`
    })
    .finally(() => {
        setTimeout(() => {
            alert("das ist finally")
        }, 2000)
    })