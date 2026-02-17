import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { UserContext } from "../context/UserContext"
import { useState } from "react"

const MainLayout = () => {

    const user ={
        token: "9029348902384",
        isLoggedIn: true,
        roles:["editor", "superadmin"],
        lastLogin: new Date()
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Header/>
        <Outlet/>
    </UserContext.Provider>
}

export default MainLayout