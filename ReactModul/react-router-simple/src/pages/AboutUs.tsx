import { Link } from "react-router-dom";
import { getPages } from "../lib/axios/pagesHelper";
import { useState, useEffect } from "react";
import { RenderBlockComponents } from "../utils/ComponentRenderHelper";

const AboutUs = () => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        getPages() // api call mit axios für übungszweck
            .then(res => setPages(res.data))
    }, [])

    const BlockList = pages?.map((page:{blocks:[]})=>{

        return page.blocks.map(component => RenderBlockComponents(component))
    })

    return (
        <>
            <h2>About Us</h2>
            <p>This is the about page.</p>
            <p>check out our <Link to='/users'>Team</Link></p>

            {BlockList}
        </>
    );
};

export default AboutUs