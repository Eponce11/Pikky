
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

interface Post {
    id: number;
    caption: string;
    createdAt: string;
    updatedAt: string;
    user_id: number;
}

const ProfileBody = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState<Array<Post>>([]);
    
    useEffect( () => {
        axios.post('http://127.0.0.1:5000/api/post/getAllUserPosts', {user_id: 1})
            .then( (response) => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch( (error) => {
                console.log(error.response.data)
            })
    }, [])

    return (
        <div className="bg-bg-grey grow p-2">
            <div className="grid gap-1 grid-cols-3">
                {
                    posts.map( (post, idx) => {
                        return (
                            <div className="bg-[#19D16E] aspect-square" key={idx} onClick={ () => { navigate('/post') } }></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileBody