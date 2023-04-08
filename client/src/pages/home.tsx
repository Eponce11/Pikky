

import Post from "../components/post"
import Navbar from "../components/navbar"

const Home = () => {

    


    return (
        <div>
            <div className="bg-gradient-to-r from-primary-purple to-secondary-purple w-screen sticky top-0 z-50">
                <h1 className="text-primary-white px-2 py-1 text-[28px]">Pikky</h1>
            </div>

            <Navbar/>
        </div>
    )
}

export default Home