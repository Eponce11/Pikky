
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import RegisterForm from "../components/registerForm";
import RegisterProfileImgForm from "../components/registerProfileImgForm";

export interface RegisterData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
    profilePicture: string | null;
}


const Register = () => {

    const [isFormDataValid, setIsFormDataValid] = useState<boolean>(true);

    const [formData, setFormData] = useState<RegisterData>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: null
    })


    const navigate = useNavigate();



    return (
        <div className="flex justify-center items-center h-screen w-screen bg-primary-white">
            {
                !isFormDataValid ?
                    <RegisterForm formData={formData} setFormData={setFormData} setIsFormDataValid={setIsFormDataValid}/> :
                    <RegisterProfileImgForm formData={formData} setFormData={setFormData} setIsFormDataValid={setIsFormDataValid}/>
            }
        </div>
    )
}


export default Register