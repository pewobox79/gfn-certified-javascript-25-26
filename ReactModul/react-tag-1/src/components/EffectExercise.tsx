import { useEffect, useState } from "react"

interface ProductItemType {
    title: string
    id: number
    category: string
    description?:string
}
export default function EffectExercise() {

    const [products, setProducts] = useState<ProductItemType[]>([]);
    const [productId, setProductId] = useState<number | string | undefined>(undefined)

    const getProducts = () => {
        return fetch('https://dummyjson.com/products')
            .then(res => res.json())
    }

    const getProductById = (id: number | string) => {
        return fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
    }

    function handleProductId(e) {
        setProductId(e.target.id)
    }
    function handleResetProductId(){
        setProductId(undefined)
    }
    useEffect(() => {
        console.log("effect runs")
        if (productId) {
            getProductById(productId).then((singleProduct:ProductItemType) => {
                if (singleProduct) {
                    const newArray = new Array(singleProduct)
                    setProducts(newArray)

                    //Equivalent zu oben
                    // setProducts([singleProduct])
                }
            })
        } else {
            getProducts().then(data => setProducts(data.products))
        }
    }, [productId])
    return <div>
        <h1>Effect exercise</h1>
        <button onClick={handleResetProductId} disabled={!productId}>Reset</button>

        {products.map((product: ProductItemType) => {
            return <div key={product.id + product.category}>
                <h3 id={String(product.id)} onClick={handleProductId}>{product.title}</h3>
                {productId && <div><p>Kategorie: {product.category}</p>
                <p>Beschreibung: {product.description}</p></div>}</div>
        })}
    </div>
}