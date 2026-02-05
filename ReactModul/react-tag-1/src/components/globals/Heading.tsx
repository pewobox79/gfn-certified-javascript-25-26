export default function Heading({title}: {title?: string}) {
    return <h1 className="redBtnM">{title ? title.toLocaleUpperCase() : "Fallback"}</h1>
}
