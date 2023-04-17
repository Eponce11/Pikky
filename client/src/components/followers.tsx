
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import BackIcon from "../static/icon-back.svg"
import { getFollowers } from "../functions/api";



const Followers = () => {

    const navigate:any = useNavigate();

    const [followers, setFollowers] = useState<Array<any>>([])

    useEffect( () => {
        getAllFollowers();
    }, [])

    const getAllFollowers = async () : Promise<void> => {
        try {
            const followers = await getFollowers('1')
            console.log(followers)
            setFollowers(followers)
        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center p-2 bg-gradient-to-r from-primary-purple to-secondary-purple relative mb-2">
                <img src={ BackIcon } alt="Back" className="left-0 ml-2 absolute" onClick={ () => { navigate('/user') } }/>
                <h3 className="text-primary-white ml-3">Username Followers</h3>
            </div>
            <ul className="px-2">
                {
                    followers.map( (follower) => {
                        return (
                            <li key={follower.id} className="flex items-center py-1 relative">
                                <div className="bg-[red] rounded-full h-10 aspect-square"/>
                                <h4 className="ml-3">{follower.username}</h4>
                                {
                                    follower.following ?
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