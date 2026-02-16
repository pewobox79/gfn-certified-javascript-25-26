import { useEffect, useState } from "react"
import { getPosts } from "../../utils/usersHelper"
import PostListItem from "./PostListItem"
import { PostItemType } from "../../types/usertypes"


export default function PostOverview() {
    const [posts, setPosts] = useState<PostItemType[]>([])
    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    const PostList = posts.map((post: PostItemType) => (
        <PostListItem key={post.id} {...post} />
    ))

    return (
        <div >
            {PostList}
        </div>
    )
}
