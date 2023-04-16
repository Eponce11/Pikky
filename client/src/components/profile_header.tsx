
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { useAppSelector } from "../app/hooks"
import DefaultProfilePicture from "../static/icon-profile-pic.svg"
import { getUserFollowers, getUserfollowing, newUserRelationship } from "../functions/api";

interface BasicUserInfo {
    username: string,
    profilePicture: string | null,
    id: string
    numOfPosts: number
}

const ProfileHeader = (props: BasicUserInfo) => {

    const signedInUserId = useAppSelector( (state) => state.signedInUser.id)
    const { username, profilePicture, numOfPosts, id } = props
    const [followerCount, setFollowerCount] = useState<any>(0);
    const [followingCount, setFollowingCount] = useState<any>(0);
    const [isFollowing, setIsFollowing] = useState<any>(false);
    const navigate = useNavigate();
    
    useEffect( () => {
        getUserFollowersCount();
        getUserFollowingCount();
    }, [])

    const getUserFollowersCount = async (): Promise<void> => {
        try {
            const userFollowers = await getUserFollowers('1')
            setFollowingCount(userFollowers.length)
            userFollowers.map( (follower:any) => {
                if (follower.follower_id === signedInUserId){
                    setIsFollowing(true);
                }
            })
        } catch (err:any) {
            console.log(err)
        }
    }

    const getUserFollowingCount = async (): Promise<void> => {
        try {
            const userFollowing = await getUserfollowing('1')
            setFollowerCount(userFollowing.length)
            console.log(userFollowing)
        } catch (err:any) {
            console.log(err)
        }
    }

    const handleFollow = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            await newUserRelationship({ follower_id: signedInUserId, following_id: id})
        } catch (err:any) {
            console.log(err)
        }
    }

    return (
        <div className="text-[12px] pb-4 bg-primary-white">
            <div className="bg-gradient-to-r from-primary-purple to-secondary-purple w-screen h-7" />
            <div className="grid gap-x-4 gap-y-1 grid-cols-4 px-2 mt-2">
                <div className="flex justify-center h-9 relative">
                    <div className="bg-primary-white h-20 w-20 rounded-full absolute top-[-20px] flex justify-center items-center">
                        {
                            profilePicture ?
                                <img src={ profilePicture } alt="" className="w-[75px] h-[75px] rounded-full" /> :
                                <img src={ DefaultProfilePicture } alt="" className="w-[75px] h-[75px]  rounded-full"/>
                        }
                    </div>
                </div>
                <div className="h-12 col-span-3 pl-4">
                    <ul className="flex justify-center relative">
                        <li className="flex flex-col items-center absolute left-0 mt-2" onClick={ () => { navigate('/user/followers') }}>
                            <p>{followerCount}</p>
                            <p>Followers</p>
                        </li>
                        <li className="flex flex-col items-center mt-2" onClick={ () => { navigate('/user/following') }}>
                            <p>{followingCount}</p>
                            <p>Following</p>
                        </li>
                        <li className="flex flex-col items-center absolute right-0 mt-2">
                            <p>{numOfPosts}</p>
                            <p>Posts</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center h-9">
                    <p>{ username }</p>
                </div>
                <div className="flex items-center h-9 col-span-3 pl-4">
                    {
                        signedInUserId === id ?
                            <button className="primary-btn h-8 px-6 py-1" onClick={ () => { navigate(`/edit/${signedInUserId}`) }}>Edit Profile</button> :
                                isFollowing ?
                                    <button className="secondary-btn h-8 w-full ">Unfollow</button> :
                                    <button className="secondary-btn h-8 px-6 py-1" onClick={handleFollow}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader