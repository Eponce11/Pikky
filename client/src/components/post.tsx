


const Post = () => {



    return (
        <div>
            <div className="flex items-center bg-[green] h-[50px] px-2">
                <div className=" bg-[red] w-9 aspect-square rounded-full"/>
                <p className="pl-2">Username</p>
            </div>
            <div className="bg-[#19D16E] aspect-square"/>
            <div className="flex items-center justify-between bg-[blue] h-10">
                <div className="flex ml-2">
                    <div className="bg-[yellow] h-8 aspect-square"/>
                    <div className="bg-[yellow] h-8 aspect-square ml-3"/>
                </div>
                <h4 className="mr-2">Likes 52</h4>
            </div>
            <div className="bg-[grey] px-2 h-44">
                <h2>Comments</h2>
                <ul>
                    <li>
                        Username1: Nice post
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post