import { useEffect, useState } from "react"
import axios from "axios"

export function useFetch(url: string) {
    //hook states
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<null | unknown>(null)
    /*  const axiosReturn ={
         headers:{},
         data:{},
         request:{statusText:""}
         
     } */
    // api call
    async function fetchData() {
        try {
            const response = await axios.get(url)
            if (response.request.statusText.toLowerCase() !== "ok") {
                setError("network response failed")
                throw new Error('Network response failed')
            }
            setData(response.data)
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }
    // nötig weil daten client componenten abgerufen werden
    useEffect(()=>{
        fetchData()
    },[url])
    //rückgabe werte
    return { data, isLoading, error }

}