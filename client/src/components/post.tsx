
import { useNavigate } from "react-router-dom"
import CommentIcon from "../static/icon-comment.svg"
import HeartIcon from "../static/icon-heart.svg"
import DefaultProfilePicture from "../static/icon-profile-pic.svg"


const Post = (props: any) => {


    const { post } = props

    const navigate = useNavigate();

    return (
        <div className="border-solid border-x-0 border-t-0 border-b-[1px] border-border-grey">
            <div className="flex items-center bg-primary-white h-[50px] px-2">
                <img src={ post.profilePicture ?  post.profilePicture : DefaultProfilePicture} alt="" className="w-9 aspect-square rounded-full" />
                <p className="pl-2" onClick={ () => { navigate("/user") }}>{ post.username }</p>
            </div>
            <img className="w-screen aspect-square" src={post?.image} alt="" />
            
            <div className="flex items-center justify-between bg-bg-grey h-10">
                <div className="flex ml-2">
                    <img src={ HeartIcon } alt="Comment" />
                    <img src={ CommentIcon } alt="Comment" className="ml-3" />
                </div>
                <h4 className="mr-2">Likes 52</h4>
            </div>
            <div className="bg-primary-white px-2 h-44">
                <h4>Comments</h4>
                <p>{ post.caption }</p>
                <ul>
                    <li>
                        Username1: Nice post
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post