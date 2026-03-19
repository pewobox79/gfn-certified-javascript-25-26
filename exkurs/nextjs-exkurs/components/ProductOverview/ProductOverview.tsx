import { getProducts } from "@/utils/fetchHelper"

export default async function ProductOverview(){

    const response = await getProducts()

    return <div>
        <h1> Produkte Übersicht</h1>
        <p>{JSON.stringify(response)}</p>
    </div>
}