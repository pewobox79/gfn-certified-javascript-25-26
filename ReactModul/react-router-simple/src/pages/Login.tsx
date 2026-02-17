import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom"

const Login =()=>{

    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)

    function handleLogin(){
        setIsLoggedIn(!isLoggedIn)
    }
    return <div>
        <button onClick={handleLogin} className="btn btn-warning">{isLoggedIn ? "Logout" : "Login"}</button>
        {isLoggedIn && <Link to="/dashboard" className="btn btn-secondary" >Go to Dashboard</Link>}
    </div>
}

export default Login