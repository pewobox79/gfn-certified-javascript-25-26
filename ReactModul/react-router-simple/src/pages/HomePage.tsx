import { useEffect, useState } from "react";
import { getHomepage } from "../utils/usersHelper";
const HomePage = () => {

    const [homepage, setHomepage] = useState()
    useEffect(()=>{

        getHomepage().then(data => setHomepage(data.data))


    }, [])

    console.log("homepage", homepage)
    if(!homepage) return <div>no data</div>

    const BlocksList = homepage?.blocks?.map((block) => {

        const key = block.id
        if (block['__component'] === "shared.slider"){ 
            return <h2 key={key}>Shared Slider Element {block.id}</h2>
        }
        if (block['__component'] === "shared.quote") {
            return <blockquote className=" btn btn-warning" key={key}>{block.title} {block.body}</blockquote>
        }

    })

    console.log("blocklist", BlocksList)
    return (
        <>
            <h2>{homepage?.title}</h2>
            <p>Welcome to the home page!</p>

            {BlocksList}
        </>
    );
};

export default HomePage