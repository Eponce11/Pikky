import { useNavigate } from "react-router-dom"
import HomeIcon from '../static/icon-home.svg'
import SearchIcon from '../static/icon-search.svg'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-around items-center bg-secondary-purple w-full h-[40px] sticky bottom-0">
            <div className="flex justify-between w-1/2">
                <img src={ HomeIcon } alt="home" onClick={ () => { navigate("/home") }}/>
                <img src={ SearchIcon } alt="search" onClick={ () => { navigate("/search") }}/>
                <div className="bg-[red] h-[30px] aspect-square rounded-full" onClick={ () => { navigate("/user") }}/>
            </div>
        </div>
    )
}

export default Navbar