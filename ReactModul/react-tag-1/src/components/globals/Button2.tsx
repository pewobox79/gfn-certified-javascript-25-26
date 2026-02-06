interface Button2Type {
    title: string
    action: (e:any)=>void
}


export default function Button2({title, action}:Button2Type){

    return <button onClick={action}>{title}</button>
}