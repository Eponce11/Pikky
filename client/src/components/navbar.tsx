import { useNavigate } from "react-router-dom"
import HomeIcon from '../static/icon-home.svg'
import SearchIcon from '../static/icon-search.svg'
import DefaultProfilePicture from "../static/icon-profile-pic.svg"
import { useAppSelector } from "../app/hooks"

const Navbar = () => {

    const signedInUserUsername = useAppSelector( (state) => state.signedInUser.username)
    const signedInUserProfilePicture = useAppSelector( (state) => state.signedInUser.profilePicture)
    const navigate = useNavigate();

    return (
        <div className="flex justify-around items-center bg-secondary-purple w-full h-[40px] sticky bottom-0 z-50">
            <div className="flex justify-between w-1/2">
                <img src={ HomeIcon } alt="home" onClick={ () => { navigate("/home") }}/>
                <img src={ SearchIcon } alt="search" onClick={ () => { navigate("/search") }}/>
                {
                    signedInUserProfilePicture ?
                        <img src={signedInUserProfilePicture} alt="" className="h-[30px] aspect-square rounded-full" onClick={ () => { navigate(`/user/${signedInUserUsername}`) }}/> :
                        <img src={DefaultProfilePicture} alt="" className="h-[35px] aspect-square rounded-full" onClick={ () => { navigate(`/user/${signedInUserUsername}`) }}/>
                }
                <p onClick={ () => navigate('/newPost')}>+</p>
            </div>
        </div>
    )
}

export default Navbar