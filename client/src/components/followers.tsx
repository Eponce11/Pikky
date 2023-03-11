
import { useNavigate } from "react-router-dom"
import BackIcon from "../static/icon-back.svg"



const Followers = () => {

    const navigate:any = useNavigate();

    const users = [{following: false},{following: false},{following: false},{following: true},{following: false}];

    return (
        <div>
            <div className="flex items-center justify-center p-2 bg-gradient-to-r from-primary-purple to-secondary-purple relative mb-2">
                <img src={ BackIcon } alt="Back" className="left-0 ml-2 absolute" onClick={ () => { navigate('/user') } }/>
                <h3 className="text-primary-white ml-3">Username Followers</h3>
            </div>
            <ul className="px-2">
                {
                    users.map( (user, idx) => {
                        return (
                            <li className="flex items-center py-1 relative">
                                <div className="bg-[red] rounded-full h-10 aspect-square"/>
                                <h4 className="ml-3">Username</h4>
                                {
                                    user.following ?
                                        <button className="right-2 absolute secondary-btn w-1/3 h-3/5">Unfollow</button> :
                                        <button className="right-2 absolute primary-btn w-1/3 h-3/5">Follow</button>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        
    )
}

export default Followers;