import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from "react-bootstrap-typeahead"
import { useEffect, useState } from 'react';
import { getUsers } from '../../utils/usersHelper';
import { Link } from 'react-router-dom';
import { UserItemType } from '../../types/usertypes';
import { Option } from 'react-bootstrap-typeahead/types/types';

export default function SearchComplete() {

    const [singleSelection, setSingleSelection] = useState<Option[]>([])
    const [userList, setUserList] = useState<UserItemType[]>([])

    useEffect(() => {
        getUsers().then(data => setUserList(data))
    }, [])

    function clearSearch() {
        setSingleSelection([])
    }
    console.log("singleUser", singleSelection)
    return <div>
        <form>
            <label htmlFor="basic-typeahead-single">Search User</label>
            <div className='d-flex justify-content-center mb-2'>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelection}
                    options={userList}
                    placeholder="Choose a state..."
                    selected={singleSelection}
                />
                <Link
                    to={`/users/${singleSelection[0]?.id}?max=${userList.length}`}
                    className={`btn btn-warning ${singleSelection.length === 0 && "disabled"}`}
                    onClick={clearSearch}
                >
                    Open
                </Link>
            </div>
        </form>
    </div>
}