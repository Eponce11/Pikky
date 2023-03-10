
import { useNavigate } from "react-router-dom"

const ProfileBody = () => {

    const navigate = useNavigate();
    const medias = [0,0,0,0,0,0,0,0,0]


    return (
        <div className="bg-bg-grey grow p-2">
            <div className="grid gap-1 grid-cols-3">
                {
                    medias.map( (media, idx) => {
                        return (
                            <div className="bg-[#19D16E] aspect-square" key={idx} onClick={ () => { navigate('/post') } }></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileBody