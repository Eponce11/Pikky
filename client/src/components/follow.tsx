



const Follow = () => {



    return (
        <div>
            <div className="flex items-center bg-[green] p-2">
                <div className="bg-[blue] h-7 aspect-square"/>
                <h2 className="ml-3">Username Followers</h2>
            </div>
            <ul className="px-2">
                <li className="flex items-center py-2">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                </li>
                <li className="flex items-center py-2">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                </li>
                <li className="flex items-center py-2">
                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                    <h4 className="ml-3">Username</h4>
                </li>
            </ul>
        </div>
        
    )
}

export default Follow