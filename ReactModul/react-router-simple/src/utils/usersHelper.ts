
const DOMAIN_API_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = async () => {

    const url = `${DOMAIN_API_URL}/users`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return { msg: "error on response" }
        }
        return await response.json()
    } catch (err) {
        return { msg: "error on fetch" }
    }

}


export const getPosts = async () => {

    const url = `${DOMAIN_API_URL}/posts`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return { msg: "error on response" }
        }
        return await response.json()
    } catch (err) {
        return { msg: "error on fetch" }
    }

}

export const getPostById = async (id:number) => {

    const url = `${DOMAIN_API_URL}/posts/${id}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return { msg: "error on response" }
        }
        return await response.json()
    } catch (err) {
        return { msg: "error on fetch" }
    }

}

const STRAPI_URL = 'http://localhost:1337/api'

export async function getHomepage(){

    const url = `${STRAPI_URL}/homepage?populate=*`
    try{

        const response = await fetch(url)
        if(!response.ok){
            console.log("error on response")
        }

        return await response.json()
    }catch(err){

        console.log("fetch failed")
    }
}