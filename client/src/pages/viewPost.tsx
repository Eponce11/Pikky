
import Post from "../components/post";
import BackIcon from "../static/icon-back.svg"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnePost } from "../functions/api";


import { Post as PostInfo } from "../pages/profile";
type PostInfoOrNull = PostInfo | null;

const ViewPost = () => {

    const [post, setPost] = useState<PostInfoOrNull>(null);
    const { postId } = useParams<string>();

    useEffect( () => {
        const fetchData = async () => {
            try {
                const onePost = await getOnePost(postId);
                console.log(onePost)
                setPost(onePost)
            } catch (err: any) {
                console.log(err)
            }
        }
        fetchData();
    }, [])


    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center justify-center p-2 bg-gradient-to-r from-primary-purple to-secondary-purple relative mb-2">
                <img src={ BackIcon } alt="Back" className="left-0 ml-2 absolute" onClick={ () => { navigate(-1) } }/>
                <h3 className="text-primary-white ml-3 text-center">Post</h3>
            </div>
            { post ? <Post post={post}/> : null }
        </div>
    )
}


export default ViewPost;