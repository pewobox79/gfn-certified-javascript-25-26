
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