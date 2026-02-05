import styles from '../../styles/UserOverview.module.css';
import UserOverviewItem from './UserOverviewItem';


const userData =[
    {
        username: "Peter",
        tel: "080898908908",
        gender: "male"
    },
    {
        username: "Klaus",
        tel: "980809879627846728",
        gender: "male"
    },
    {
        username: "Sibille",
        tel: "897989080982340989028",
        gender: "female"
    }
]

export default function UserOverview(){

    const userList = userData.map((user, index) => {
        return <UserOverviewItem
            key={index + user.username}
            {...user}
        />
    })
    return <div className={styles.userOverviewWrapper}>
        <h2>User Overview</h2>
        {userData.length > 0 ? userList : "no user"}
    </div>
}