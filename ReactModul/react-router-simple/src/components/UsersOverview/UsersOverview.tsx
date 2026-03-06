import { useEffect, useState } from "react"
import UserListItem from "./UserListItem"
import { getUsers } from "../../utils/usersHelper"
import { status, UserItemType } from "../../types/usertypes"

const UsersOverview = () => {

    const [users, setUsers] = useState<{ status: status, data: UserItemType[] }>({ status: "loading", data: [] })
    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        const div = document.createElement("div")
        div.innerHTML = "my div element"
        div.setAttribute("id", "divelement")
        document.body.append(div)

        getUsers().then(data => {
            //error handling hier

            if (data.msg) {
                console.log("error msg", data.msg)
            }
            setUsers({ ...users, status: "success", data: data })
        })

        return () => {
            div.remove()
        }
    }, [reRender])

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