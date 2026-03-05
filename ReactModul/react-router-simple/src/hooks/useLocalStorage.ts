import { useState } from "react"
export function useLocalStorage(key: string, initialValue: unknown = "") {

    //das passiert initial bei aufruf von useLocalStorage()
    const [value, setValue] = useState(() => {
        let storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initialValue
    })

    function setStoredValue(newValue: unknown) {
        setValue(newValue) //direkte veränderung des states via setter
        localStorage.setItem(key, JSON.stringify(newValue)) //setzen des neuen wertes in localstorage
    }

    function removeStoredValue() {
        setValue(initialValue)
        localStorage.removeItem(key)
    }

    return { value, setStoredValue, removeStoredValue }
}