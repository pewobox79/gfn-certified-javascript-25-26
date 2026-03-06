import { PostItemType } from '../../types/usertypes'
import { Link } from 'react-router-dom'

export default function PostListItem({ title, id }:PostItemType) {
    return (
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-between">
            <h4>{title}</h4>
            <Link to={`/dashboard/posts/${id}`} className='btn btn-secondary'>Lesen</Link>
        </div>
    )
}
