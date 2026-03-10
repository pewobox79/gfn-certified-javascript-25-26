import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useUserStore } from "../store/useUserStore"

const AuthenticationLayout = () => {

    const {value} = useUserStore()
    //const { isLoggedIn } = useContext(UserContext)

    if (!value.isLoggedIn) {
        return <Navigate to="/admin/login" replace={true} />
    }

    return <Outlet />
}

export default AuthenticationLayout