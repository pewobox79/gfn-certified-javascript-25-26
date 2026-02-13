import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const SingleUser = () => {
    const params = useParams()
    const [selectedUser, setSelectedUser] = useState({})

    async function getUserByID(userId: number) {

        const url = `https://jsonplaceholder.typicode.com/users/${userId}`

        try {

            const response = await fetch(url)
            if (!response.ok) {
                console.log("fetch failed")
            }

            return await response.json()

        } catch (err) {
            console.log("error on fetch", err)
        }


    }

    useEffect(() => {
        getUserByID(Number(params.id))
            .then(data => setSelectedUser(data))
    }, [])

    return <div className="card text-center">
        <div className="card-header">
            {selectedUser.company.name}
        </div>
        <div className="card-body">
            <h5 className="card-title">{selectedUser.name}</h5>
            <p className="card-text">{selectedUser.email}</p>
            <a href={`tel:${selectedUser.phone}`} className="btn btn-primary">Call {selectedUser.name}</a>
        </div>
        <div className="card-footer text-body-secondary">
            {selectedUser.website}
        </div>
    </div>


}

export default SingleUser