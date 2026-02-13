import { useParams, Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import BackButton from "../components/globals/BackButton"


interface SingleUserType {
    name?: string
    username?: string
    company?: {
        name?: string
    }
    email?: string
    phone?: string
    website?: string
}
const SingleUser = () => {

    //TODO implement bootstrap suggestions => https://iqbalfn.github.io/bootstrap-autocomplete/
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const maxValue = searchParams.get("max")

    const [selectedUser, setSelectedUser] = useState<SingleUserType>({})

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
    }, [params.id])


    if (Object.keys(selectedUser).length === 0) {
        return <div>No user available
            <BackButton />
        </div>
    }

    return <>
        <div className="card text-center">
            <div className="card-header">
                {selectedUser?.company?.name}
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

        <BackButton />
        <br />
        {Number(params.id) > 1 && <Link to={`/users/${Number(params.id) - 1}?max=${maxValue}`} className="btn btn-primary">prev user</Link>}
        {Number(params.id) != Number(maxValue) && <Link to={`/users/${Number(params.id) + 1}?max=${maxValue}`} className="btn btn-secondary">next user</Link>}
    </>


}

export default SingleUser