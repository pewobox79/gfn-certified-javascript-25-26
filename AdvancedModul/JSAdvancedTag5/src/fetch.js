// APIs sind datenquellen, um client mit informationen zu bedienen
// eine API kann ich mit fetch() - Methode ansprechen.

// domain: bild.de
// protocoll: https://

// => URL https://bild.de
// subDomain: www.

// => URL https://www.bild.de

// API auf gleicher domain
// subDomain api.=> API subdomain

// => https://api.bild.de

// => https://bcd.mozilla.com/api/v1/meinejson.json

// JSON PLACEHOLDER DATA SET
//source: https://jsonplaceholder.typicode.com


//GET POSTS 
const DOIMAIN_URL = 'https://jsonplaceholder.typicode.com'

const getPostData = async (id) => {

    const currentId = id ? `/${id}` : ''

    const finalUrl = `${DOIMAIN_URL}/posts${currentId}`
    try {
        const res = await fetch(finalUrl)
        if (!res.ok) {
            console.log("kein response")
            throw new Error("failed to fetch")
        }
        return await res.json()

    } catch (err) {
        console.log("Erro in fetch", err)
    }

}

const allPosts = await getPostData(10)

console.log(allPosts)

