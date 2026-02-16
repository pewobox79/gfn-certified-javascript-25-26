import { useEffect, useState } from "react"
import UserListItem from "./UserListItem"
import { getUsers } from "../../utils/usersHelper"
import { status, UserItemType } from "../../types/usertypes"

const UsersOverview = () => {

    const [users, setUsers] = useState<{ status: status, data: UserItemType[] }>({ status: "loading", data: [] })
    const [reRender, setReRender] = useState(false);

    //console.log("outer useEffect und ReRender state", reRender)
    useEffect(() => {
        const div = document.createElement("div")
        div.innerHTML = "my div element"
        div.setAttribute("id", "divelement")
        document.body.append(div)
       // console.log("inner useEffect")

        getUsers().then(data => {
            //error handling hier

            if (data.msg) {
                console.log("error msg", data.msg)
            }
            setUsers({ ...users, status: "success", data: data })
            //console.log("users after setter call", users)
        })

        return () => {
            console.log("clean up runs")
            div.remove()
        }
    }, [reRender])

    //console.log("users", users)
    const UserList = users.data.map((user: UserItemType) => {
        return <UserListItem key={user.id} {...user} lengthOfUsers={users.data.length} />
    })
    return <div>
        <h1>list of users</h1>
        <button onClick={() => setReRender(!reRender)}>Rerender</button>
        {users.status === "success" ? UserList : <div>Loading...</div>}
    </div>
}

export default UsersOverview