import styles from '../../styles/UserOverview.module.css'

interface UserItemType {
    username: string,
    gender: string
    tel: string | number
}
export default function UserOverviewItem({username, gender, tel}:UserItemType){
    return <div className={styles.itemWrapper}>
        <h3>{username}</h3>
        <p>Das ist {gender === "male" ? "seine": "ihre"} Telefonnummer: {tel}</p>
    </div>

}