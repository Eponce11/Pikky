

import { useNavigate } from "react-router-dom"
import { Post } from "../pages/profile";

interface AllPosts {
    posts: Array<Post>
}

const ProfileBody = (props: AllPosts) => {
    const { posts } = props
    const navigate = useNavigate();

    return (
        <div className="bg-bg-grey grow p-2">
            <div className="grid gap-1 grid-cols-3">
                {
                    posts.map( (post, idx) => {
                        return (
                            <img src={post.image} alt="" key={idx} className="aspect-square" onClick={ () => { navigate('/post') } }/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileBody