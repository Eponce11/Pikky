import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";


interface LoginData {
    email: string;
    password: string
}

const Login = () => {

    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const [error, setError] = useState<string>('');

    const { email, password } = formData;

    const navigate = useNavigate();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormData( (prevState:LoginData) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogin = (e:React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/user/login', formData)
            .then( (response) => {
                console.log(response.data)
                navigate('/home')
            })
            .catch( (error) => {
                setError(error.response.data)
            })
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[#F9F9F9]">
            <div className="flex justify-center pt-5 pb-10 w-full max-w-[400px] border border-solid border-[#DBDBDB] drop-shadow-xl">
                <div className="flex flex-col items-center relative w-full px-4">
                    <h1 className="text-[48px] text-center">Pikky</h1>
                    <span className="text-[red] absolute top-16">{ error }</span>
                    <div className="mt-10 inputField">
                        <input type="text" name='email' value={email} onChange={onChange} required/>
                        <span>Email</span>
                    </div>

                    <div className="inputField">
                        <input type="text" name='password' value={password} onChange={onChange} required/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="w-full text-end mt-2">
                        <a className="decoration-none" href="/register">SignUp</a>
                    </div>
                    <input type='submit' value="Login" className="text-[#F9F9F9]" onClick={handleLogin} />
                </div>
            </div>
        </div>
    )
}


export default Login