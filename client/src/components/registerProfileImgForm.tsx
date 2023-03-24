


import React, { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../functions/api";
import { convertFileToBase64 } from "../functions/file-conversion";
import DefaultProfilePicture from "../static/icon-profile-pic.svg"



import { RegisterData } from "../pages/register";

interface RegisterProps {
    formData: RegisterData;
    setFormData: React.Dispatch<SetStateAction<RegisterData>>;
    setIsFormDataValid: React.Dispatch<SetStateAction<boolean>>;
}

const RegisterProfileImgForm = (props: RegisterProps) => {

    const { profilePicture } = props.formData

    const navigate = useNavigate();

    const handleFileUpload = async (e:any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const base64 = await convertFileToBase64(file);
        props.setFormData( (prevState:RegisterData) => ({
            ...prevState,
            profilePicture: base64
        }))
    }

    const removeFile = (e:React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        props.setFormData( (prevState:RegisterData) => ({
            ...prevState,
            profilePicture: null
        }))
    }

    const handleRegister = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            await register(props.formData)
            navigate('/home')
        } catch (err:any) {
            console.log(err)
        }

    }  

    return (
        <div className="flex justify-center pt-5 pb-10 w-full max-w-[400px] border border-solid border-border-grey drop-shadow-xl">
            <div className="flex flex-col items-center w-full px-4 relative">
                <h1 className="text-[48px] text-center mb-4">Pikky</h1>
                {
                    profilePicture ?
                        <div className="relative">
                            <img src={ profilePicture } alt="" className="w-28 h-28 rounded-full" />
                            <p className="absolute top-1 right-1 bg-gray-400 rounded-full w-5 aspect-square text-center" onClick={ removeFile }>x</p>
                        </div> :
                        <img src={ DefaultProfilePicture } alt="" className="w-28 h-28 rounded-full"/>
                }
                <input 
                    type="file"
                    name="img"
                    id="file-upload"
                    accept=".jpeg, .png, .jpg"
                    className="w-full mb-3 mt-5"
                    onChange={handleFileUpload}
                />
                <button className="absolute left-4" onClick={ () => { props.setIsFormDataValid(false) } }>Back</button>
                <button className="primary-btn h-10" onClick={handleRegister}>Register</button>
            </div>
        </div>

        
    )
}


export default RegisterProfileImgForm

