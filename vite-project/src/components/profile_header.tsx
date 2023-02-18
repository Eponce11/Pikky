



const ProfileHeader = () => {




    return (
        <div className="text-[12px] pb-4">
            <div className="bg-[#19D16E] w-screen h-10" />
            <div className="grid gap-x-4 gap-y-1 grid-cols-4 px-2 mt-2">
                <div className="flex justify-center h-9 relative">
                    <div className="bg-[#FFFFFF] h-20 w-20 rounded-full absolute top-[-30px] flex justify-center items-center">
                        <div className="bg-[red] h-[75px] w-[75px] rounded-full" />
                    </div>
                </div>
                <div className="h-12 col-span-3 pl-4">
                    <ul className="flex justify-center relative">
                        <li className="flex flex-col items-center absolute left-0">
                            <p>2021</p>
                            <p>Followers</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>201</p>
                            <p>Following</p>
                        </li>
                        <li className="flex flex-col items-center absolute right-0">
                            <p>6</p>
                            <p>Posts</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center h-9">
                    <p>Username</p>
                </div>
                <div className="flex items-center h-9 col-span-3 pl-4">
                    <button className="bg-[yellow] h-8 w-full ">Follow</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader