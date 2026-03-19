import ProductOverview from "@/components/ProductOverview/ProductOverview"

export default async function DynamicPage({ params, searchParams }) {

    const paramValues = await params
    const search = await searchParams
    return <div>
        <ProductOverview/>
    </div>
}