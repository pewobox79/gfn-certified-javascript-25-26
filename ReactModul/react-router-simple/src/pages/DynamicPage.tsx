import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPageBySlug } from "../lib/axios/pagesHelper"
import { useFetch } from "../hooks/useFetch"
import { BASE_URL_STRAPI } from "../lib/axios/config"
import { DynamicContentQuery } from "../lib/strapi/dynamicQuery"

const DynamicPage = () => {
    const { slug } = useParams<{ slug: string }>() // slug ist von dem router /dynamic/:slug 

    const url = `${BASE_URL_STRAPI}/api/pages?filters[slug][$eq]=${slug}&${DynamicContentQuery}`

    //START regular solution
    const [selectedPage, setSelectedPage] = useState([])
    useEffect(() => {
        getPageBySlug(slug).then(res => setSelectedPage(res.data))
    }, [slug])
    //END regular solution

    //START custom hook solution

    const { data, isLoading, error } = useFetch(url);
    //console.log("data", data, "isLoading", isLoading, "error", error)

    //END custom hook solution


    if (isLoading) {
        return <p>data is loading...</p>
    }

    //selectedPages wird mit data ausgetauscht
    if (data?.data?.length === 0) {
        return <h3>Diese Seite existiert nicht - 404</h3>
    }

    return <p>
        <Link to={'/dynamic/our-team'}>Our-Team</Link><br />
        {JSON.stringify(error ? error?.message : data?.data)}</p>
}

export default DynamicPage