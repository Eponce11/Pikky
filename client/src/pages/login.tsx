import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setSignedInUser } from "../features/signedInUserSlice";
import { login } from "../functions/api";


export interface LoginData {
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
    const dispatch = useAppDispatch();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setFormData( (prevState:LoginData) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogin = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            const response = await login(formData)
            console.log(response)
            dispatch(setSignedInUser(response))
            navigate('/home')
        }catch (err: any) {
            setError(err)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary-white">
            <div className="flex justify-center pt-5 pb-10 w-full max-w-[400px] border border-solid border-border-grey drop-shadow-xl">
                <div className="flex flex-col items-center relative w-full px-4">
                    <h1 className="text-[48px] text-center">Pikky</h1>
                    <span className="text-text-error absolute top-16">{ error }</span>
                    <div className="mt-10 inputField">
                        <input type="text" name='email' value={email} onChange={onChange} required/>
                        <span>Email</span>
                    </div>
                    <div className="inputField">
                        <input type="text" name='password' value={password} onChange={onChange} required/>
                        <span>Password</span>
                    </div>
                    <div className="w-full text-end mt-2">
                        <a className="decoration-none" href="/register">SignUp</a>
                    </div>
                    <input type='submit' value="Login" className="primary-btn px-6 py-3 mt-4" onClick={handleLogin} />
                </div>
            </div>
        </div>
    )
}


export default Login