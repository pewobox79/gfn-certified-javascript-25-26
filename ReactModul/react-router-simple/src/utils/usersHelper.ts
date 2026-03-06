
const DOMAIN_API_URL = import.meta.env.VITE_URI_PLACEHOLDER || 'https://jsonplaceholder.typicode.com'
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337/api'
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

export async function getUserByID(userId: number) {
    const url = `${DOMAIN_API_URL}/users/${userId}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.log("fetch failed")
        }
        return await response.json()
    } catch (err) {
        console.log("error on fetch", err)
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