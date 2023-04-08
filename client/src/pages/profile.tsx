

import ProfileHeader from "../components/profile_header"
import ProfileBody from "../components/profile_body"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserAndPosts } from "../functions/api"

interface UserInfoAndPosts {
    id: string,
    username: string;
    profilePicture: string | null;
    posts: Array<Post>;
}
export interface Post {
    id: number;
    caption: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    user_id: number;
}

const Profile = () => {

    const [userInfoAndPosts, setUserInfoAndPosts] = useState<UserInfoAndPosts>({
        id: '',
        username: '',
        profilePicture: null,
        posts: []
    });
    const { username } = useParams();


    useEffect( () => {
        const fetchData = async (): Promise<void> => {
            try {
                const userDataAndPosts = await getUserAndPosts('HelloWorld')
                setUserInfoAndPosts(userDataAndPosts)
                console.log(userDataAndPosts)
            } catch (err: any) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    

    return (
        <div className="flex flex-col h-screen">
            <ProfileHeader username={userInfoAndPosts.username} profilePicture={userInfoAndPosts.profilePicture} id={userInfoAndPosts.id}/>
            <ProfileBody posts={userInfoAndPosts.posts}/>
            <Navbar/>
        </div>
    )
}

export default Profile