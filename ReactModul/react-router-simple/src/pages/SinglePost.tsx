import { useEffect, useState } from 'react'
import { getPostById } from '../utils/usersHelper'
import { useParams } from 'react-router-dom'
import { PostItemType } from '../types/usertypes'
import BackButton from '../components/globals/BackButton'

export default function SinglePost() {

    const params = useParams()
    const [selectedPost, setSelectedPost] = useState<PostItemType>()
    useEffect(() => {

        getPostById(Number(params.id)).then(data => setSelectedPost(data))

    }, [])

    if (!selectedPost) return null
    return (
        <div>
            <div>
                <BackButton type='back' label="Back to Posts" btnColor="warning"/>
            </div>
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.body}</p>
        </div>
    )
}
