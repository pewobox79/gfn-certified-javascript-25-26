import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"

const Login = () => {
    const { setStoredValue, removeStoredValue } = useLocalStorage("isLoggedInUser")
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

    function handleLogin() {
        if (isLoggedIn) {
            handleLogout()
        } else{
            setStoredValue("user ist in react-router-simple logged in")
        }
        
        setIsLoggedIn(!isLoggedIn)
        
    }

    function handleLogout(){
        removeStoredValue()
    }
    return <div>
        <button onClick={handleLogin} className="btn btn-warning">{isLoggedIn ? "Logout" : "Login"}</button>
        {isLoggedIn && <Link to="/dashboard" className="btn btn-secondary" >Go to Dashboard</Link>}
    </div>
}

export default Login