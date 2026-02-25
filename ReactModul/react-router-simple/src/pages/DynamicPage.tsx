import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPageBySlug } from "../lib/axios/pagesHelper"

const DynamicPage = () => {

    const { slug } = useParams<{ slug: string }>() // slug ist von dem router /dynamic/:slug 
    const [selectedPage, setSelectedPage] = useState([])
    useEffect(() => {
        getPageBySlug(slug).then(res => setSelectedPage(res.data))
    }, [slug])

    if (selectedPage.length === 0) {
        return <h3>Diese Seite existiert nicht - 404</h3>
    }

    return <p>
        
        <Link to={'/dynamic/our-team'}>Our-Team</Link><br/>
        {JSON.stringify(selectedPage)}</p>
}

export default DynamicPage