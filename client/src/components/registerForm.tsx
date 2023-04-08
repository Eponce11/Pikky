
import React, { SetStateAction, useState } from "react"
import { registerValidation } from "../functions/api";

import { RegisterData } from "../pages/register";

interface RegisterDataErrors {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string
}

interface RegisterProps {
    formData: RegisterData;
    setFormData: React.Dispatch<SetStateAction<RegisterData>>;
    setIsFormDataValid: React.Dispatch<SetStateAction<boolean>>;
}


const RegisterForm = (props: RegisterProps) => {


    const [errors, setErrors] = useState<RegisterDataErrors>({})

    const { username, firstName, lastName, email, password, confirmPassword } = props.formData

    const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        props.setFormData( (prevState:RegisterData) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleDataValidation = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            await registerValidation(props.formData);
            props.setIsFormDataValid(true);
        } catch (err:any) {
            setErrors(err);
        }
    }

    return (
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
                    <input type='submit' value="Continue" className="primary-btn px-6 py-3 mt-4" onClick={handleDataValidation} />
                </div>
            </div>
    )
}


export default RegisterForm