
import Post from "../components/post";
import BackIcon from "../static/icon-back.svg"
import { useNavigate } from "react-router-dom";




const ViewPost = () => {



    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center justify-center p-2 bg-gradient-to-r from-primary-purple to-secondary-purple relative mb-2">
                <img src={ BackIcon } alt="Back" className="left-0 ml-2 absolute" onClick={ () => { navigate('/user') } }/>
                <h3 className="text-primary-white ml-3 text-center">Post</h3>
            </div>
            <Post/>
        </div>
    )
}


export default ViewPost;