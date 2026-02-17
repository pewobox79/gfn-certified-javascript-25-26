import { Outlet } from "react-router-dom"
const AuthorizationLayout =()=>{

    const isEditor = true
    if(!isEditor) return <h1>no access to content</h1>
    return <Outlet/>
}

export default AuthorizationLayout