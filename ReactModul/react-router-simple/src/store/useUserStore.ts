import {create} from 'zustand'


interface UserStore{
    value: { isLoggedIn: boolean },
    logout: ()=>void
    login: ()=>void
}
export const useUserStore = create<UserStore>((set) => ({
    value: { isLoggedIn: false },
    login: () => {
        set(({ value }) => ({
            value: { ...value, isLoggedIn: true }
        }))
    },
    logout: () => {
        set(({ value }) => ({
            value: { ...value, isLoggedIn: false }

        }))
    }
}))