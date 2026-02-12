import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Header(){
    console.log("header renders")
    const {user} = useContext(UserContext)
    return <header>
        <h1>super website von {user.firstname}</h1>
        <p>das ist meine super website</p>
    </header>
}