import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"

interface RegisterData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}


const Register = () => {

    const [formData, setFormData] = useState<RegisterData>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { username, firstName, lastName, email, password, confirmPassword } = formData

    const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormData( (prevState:RegisterData) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRegister = (e:React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/user/create', formData)
            .then( (response) => {
                console.log(response.data)
            })
            .catch( (error) => {
                console.log(error.response.data)
            })
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-[red] p-10 aspect-square" >
                <input type="text" name='username' value={username} onChange={onChange}/>
                <input type="text" name='firstName' value={firstName} onChange={onChange}/>
                <input type="text" name='lastName' value={lastName} onChange={onChange}/>
                <input type="text" name='email' value={email} onChange={onChange}/>
                <input type="text" name='password' value={password} onChange={onChange}/>
                <input type="text" name='confirmPassword' value={confirmPassword} onChange={onChange}/>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}


export default Register