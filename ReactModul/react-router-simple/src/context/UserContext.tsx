import { createContext, Dispatch, SetStateAction } from "react";

export const UserContext = createContext<{isLoggedIn: boolean, setIsLoggedIn: Dispatch<SetStateAction<boolean>>}>({isLoggedIn: false, setIsLoggedIn: ()=>{}})