import { Link } from "react-router-dom"
import { UserItemType } from "../../types/usertypes"

const UserListItem = ({ username, name, id, lengthOfUsers }: UserItemType) => {

    return <div className="border my-3 p-2 rounded-2">
        <h3>Name: {name}</h3>
        <p>aka: {username}</p>
        <Link to={`/users/${id}?max=${lengthOfUsers}`} className="btn btn-success">User Details</Link>
    </div>
}

export default UserListItem