export default function Heading({title}: {title?: string}) {
    return <h1>{title ? title.toLocaleUpperCase() : "Fallback"}</h1>
}
