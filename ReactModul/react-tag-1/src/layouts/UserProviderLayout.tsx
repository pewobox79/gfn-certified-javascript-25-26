import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

type UserProviderType ={
    children: ReactNode | ReactElement | ReactElement[]
}
export default function UserProviderLayout({children}:UserProviderType){

    const [user, setUser] = useState({firstname: "", email: ""})

    return <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
}