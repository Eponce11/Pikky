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
        <div className="flex justify-center items-center bg-[green] h-screen w-screen">
            <div className="bg-[blue] h-80 w-96">
                <h1 className="text-[48px] text-center">Pikky</h1>
                <span>{ error }</span>
                <p>Email:</p>
                <input type="text" className="mb-4" name='email' value={email} onChange={onChange} />
                <p>Password:</p>
                <input type="text" name='password' value={password} onChange={onChange} />
                <button className="bg-[red] w-full block" onClick={handleLogin} >Login</button>
            </div>
        </div>
    )
}


export default Login