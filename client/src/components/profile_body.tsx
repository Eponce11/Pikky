
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllUserPosts } from "../functions/api";

export interface Post {
    id: number;
    caption: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    user_id: number;
}

const ProfileBody = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState<Array<Post>>([]);
    
    useEffect( () => {
        const fetchData = async (): Promise<void> => {
            try {
                const allPosts = await getAllUserPosts(1)
                setPosts(allPosts)
            } catch (err: any) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

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