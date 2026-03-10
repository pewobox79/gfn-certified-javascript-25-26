import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useUserStore } from "../store/useUserStore"

const Login = () => {
    const { setStoredValue, removeStoredValue } = useLocalStorage("isLoggedInUser")
    const { value,logout, login } = useUserStore()
    //const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    function handleLogin() {
        if (value.isLoggedIn) {
            handleLogout()
            
        } else {
            login() //zustand store
            setStoredValue("user ist in react-router-simple logged in")
        }
        
        //setIsLoggedIn(!isLoggedIn)

    }

    function handleLogout() {
        logout()//Zustand store
        removeStoredValue()
    }
    return <div>
        <button onClick={handleLogin} className="btn btn-warning">{value.isLoggedIn ? "Logout" : "Login"}</button>
        {value.isLoggedIn && <Link to="/dashboard" className="btn btn-secondary" >Go to Dashboard</Link>}
    </div>
}

export default Login