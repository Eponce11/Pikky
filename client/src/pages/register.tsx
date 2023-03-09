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

interface RegisterDataErrors {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string
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
    const [errors, setErrors] = useState<RegisterDataErrors>({})

    const { username, firstName, lastName, email, password, confirmPassword } = formData

    const navigate = useNavigate();

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
                navigate('/home')

            })
            .catch( (error) => {
                console.log(error.response.data)
                setErrors(error.response.data)
            })
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary-white">
            <div className="flex justify-center pt-5 pb-10 w-full max-w-[400px] border border-solid border-border-grey drop-shadow-xl">
                <div className="flex flex-col items-center relative w-full px-4">
                    <h1 className="text-[48px] text-center">Pikky</h1>
                    <div className="mt-10 inputField relative">
                        {
                            errors.hasOwnProperty('username') ?
                                <span className="absolute top-[-35px]">{ errors['username'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='username' value={username} onChange={onChange} required/>
                        <span>Username</span>
                    </div>
                    <div className="inputField">
                        {
                            errors.hasOwnProperty('firstName') ?
                                <span className="absolute top-[-35px]">{ errors['firstName'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='firstName' value={firstName} onChange={onChange} required/>
                        <span>First Name</span>
                    </div>
                    <div className="inputField">
                        {
                            errors.hasOwnProperty('lastName') ?
                                <span className="absolute top-[-35px]">{ errors['lastName'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='lastName' value={lastName} onChange={onChange} required/>
                        <span>Last Name</span>
                    </div>
                    <div className="inputField">
                        {
                            errors.hasOwnProperty('email') ?
                                <span className="absolute top-[-35px]">{ errors['email'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='email' value={email} onChange={onChange} required/>
                        <span>Email</span>
                    </div>
                    <div className="inputField">
                        {
                            errors.hasOwnProperty('password') ?
                                <span className="absolute top-[-35px]">{ errors['password'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='password' value={password} onChange={onChange} required/>
                        <span>Password</span>
                    </div>
                    <div className="inputField">
                        {
                            errors.hasOwnProperty('confirmPassword') ?
                                <span className="absolute top-[-35px]">{ errors['confirmPassword'] }</span> :
                                <span></span>
                        }
                        <input type="text" name='confirmPassword' value={confirmPassword} onChange={onChange} required/>
                        <span>Confirm Password</span>
                    </div>
                    <div className="w-full text-end mt-2">
                        <a className="decoration-none" href="/">SignIn</a>
                    </div>
                    <input type='submit' value="Register" className="primary-btn px-6 py-3 mt-4" onClick={handleRegister} />
                </div>
            </div>
        </div>
    )
}


export default Register