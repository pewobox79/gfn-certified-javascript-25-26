import { useContext } from "react"
import Navigation from "./Navigation/Navigation"
import { UserContext } from "../context/UserContext"

const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    return <header>
        {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
        <Navigation />
    </header>
}

export default Header