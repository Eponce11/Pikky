

import ProfileHeader from "../components/profile_header"
import ProfileBody from "../components/profile_body"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Profile = () => {

    const { username } = useParams();

    

    return (
        <div className="flex flex-col h-screen">
            <ProfileHeader/>
            <ProfileBody/>
            <Navbar/>
        </div>
    )
}

export default Profile