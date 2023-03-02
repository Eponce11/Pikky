import { useNavigate } from "react-router-dom"



const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center bg-[green] h-screen w-screen">
            <div className="bg-[blue] h-80 w-96">
                <h1 className="text-[48px] text-center">Pikky</h1>
                <p>Email:</p>
                <input type="text" className="mb-4" />
                <p>Password:</p>
                <input type="text" />
                <button className="bg-[red] w-full block" onClick={ () => { navigate("/home") } } >Login</button>
            </div>
        </div>
    )
}


export default Login