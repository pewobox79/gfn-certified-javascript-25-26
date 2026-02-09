export default function Heading({title}: {title?: string}) {
    console.log("heading rendering")
    return <h1 className="redBtnM">{title ? title.toLocaleUpperCase() : "Fallback"}</h1>
}
