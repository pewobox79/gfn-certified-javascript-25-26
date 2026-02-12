import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"

interface UserType {firstname: string, email: string}
interface UserContextType { user: UserType, setUser: Dispatch<SetStateAction<UserType>>}

const UserContext = createContext<UserContextType>({user: {firstname: "", email: ""}, setUser: ()=>{}})

export default UserContext