export const getProducts = async ()=>{
    const url = `https://jsonplaceholder.typicode.com/posts`
    try{
        const response = await fetch(url)
        if(!response.ok){
            console.log("error on fetch")
        }
        return await response.json()
    }catch(err){

        console.log("fetch failed", err)
    }
}