import styles from '../../styles/UserOverview.module.css'
import { useState } from 'react'

interface UserItemType {
    username: string,
    gender: string
    tel: string | number
}
export default function UserOverviewItem({username, gender, tel}:UserItemType){
    const [state, setState] = useState(false)

    function handleUpperCase(){
        setState(!state)
    }
    return <div className={styles.itemWrapper} onClick={handleUpperCase}>
        <h3>{state ? username.toLocaleUpperCase(): username}</h3>
        <p>Das ist { gender === "male" ? "seine": "ihre" } Telefonnummer: { tel }</p>
    </div>

}