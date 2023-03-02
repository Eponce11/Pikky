
import Navbar from "./navbar"

const Search = () => {

    const temp = [0, 0, 0, 0]

    return (
        <div className="h-screen">
            <div className="flex items-center bg-[green] h-10 px-2">
                <input type="text" className="w-full pl-2" placeholder="search"/>
            </div>
            <ul className="px-2">
                {
                    temp.map( (user, idx) => {
                        return (
                            <li className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-[red] rounded-full h-10 aspect-square"/>
                                    <h4 className="ml-3">Username</h4>
                                </div>
                                <p>x</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Navbar/>
        </div>
    )
}


export default Search