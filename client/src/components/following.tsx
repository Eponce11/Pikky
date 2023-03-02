

import { useNavigate } from "react-router-dom"



const Following = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center bg-[green] p-2">
                <div className="bg-[yellow] h-7 aspect-square" onClick={ () => { navigate('/user') } } />
                <div className="bg-[blue] h-7 aspect-square ml-3"/>
                <h2 className="ml-3">Username Followers</h2>
            </div>
            <ul className="px-2">
                <li className="flex items-center py-2 relative">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                    <button className="right-2 absolute">Unfollow</button>
                </li>
                <li className="flex items-center py-2 relative">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                    <button className="right-2 absolute">Unfollow</button>
                </li>
                <li className="flex items-center py-2 relative">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                    <button className="right-2 absolute">Unfollow</button>
                </li>
            </ul>
        </div>
        
    )
}

export default Following;