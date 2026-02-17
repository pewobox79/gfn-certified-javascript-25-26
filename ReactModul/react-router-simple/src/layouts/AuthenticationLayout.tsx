import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const AuthenticationLayout = () => {

    const { isLoggedIn } = useContext(UserContext)

    if (!isLoggedIn) {
        return <Navigate to="/admin/login" replace={true} />
    }

    return <Outlet />
}

export default AuthenticationLayout