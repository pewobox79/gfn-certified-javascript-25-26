import { UserItemType } from "../../types/usertypes"

const UserListItem = ({ username, name }: UserItemType) => {

    return <div>
        <h3>Name: {name}</h3>
        <p>aka: {username}</p>
    </div>
}

export default UserListItem