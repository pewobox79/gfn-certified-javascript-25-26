
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