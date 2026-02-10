import { useEffect, useState } from "react"
export default function AbortControllerExercise() {

    const [singleProduct, setSingleProduct] = useState<{ title: string, category: string, description: string, id: number }>()
    const [productId, setProductId] = useState<number | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    const buttons = document.querySelectorAll("button")
    console.log("buttons query selector", buttons)

    useEffect(()=>{

        //add new element to client
        const myDiv = document.createElement("div")
        myDiv.innerText = "hallo my div"
        document.body.append(myDiv)

        
        console.log("effect runs")
        //WICHTIG: Abort Controller MUSS INNERHALB von useEffect sein- für jeden neuen Effect braucht es einen eigenen controller, da abort() den 
        //letzten Controller löscht/auflöst 
        const controller = new AbortController()
        const {signal} = controller
    
        fetch(`https://dummyjson.com/products/${productId}`,{signal: signal})
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data)
                setLoading(false)
            });


            //cleanup
            //ohne einbinden von cleanup laufen parallele effekte. controller.abort() bricht vorherigen effect ab!
            return ()=>{
                document.body.removeChild(myDiv)
                console.log("clean runs")
                controller.abort()
                setLoading(true)
            }

    }, [productId])

    return <div>
        {!loading ? <><div>Title: {singleProduct?.title}</div>
            <div>Kat: {singleProduct?.category}</div>
            <div>Beschreibung: {singleProduct?.description}</div></>: <h3>loading....</h3>}

        <div>
            <button onClick={() => setProductId(1)}>Product 1</button>
            <button onClick={() => setProductId(2)}>Product 2</button>
            <button onClick={() => setProductId(3)}>Product 3</button>
            <button onClick={() => setProductId(4)}>Product 4</button>
        </div>
    </div>

}