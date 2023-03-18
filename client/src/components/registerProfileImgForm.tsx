


import React, { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../functions/api";
import { convertFileToBase64 } from "../functions/file-conversion";

import { RegisterData } from "../pages/register";

interface RegisterProps {
    formData: RegisterData;
    setFormData: React.Dispatch<SetStateAction<RegisterData>>;
    setIsFormDataValid: React.Dispatch<SetStateAction<boolean>>;
}

const RegisterProfileImgForm = (props: RegisterProps) => {

    const { img } = props.formData

    const navigate = useNavigate();

    const handleFileUpload = async (e:any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const base64 = await convertFileToBase64(file);
        props.setFormData( (prevState:RegisterData) => ({
            ...prevState,
            img: base64
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
            <div className="flex flex-col items-center relative w-full px-4">
                <h1 className="text-[48px] text-center mb-10">Pikky</h1>
                <input 
                    type="file"
                    name="img"
                    id="file-upload"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleFileUpload}
                />
                {
                    img.length === 0 ?
                        <div className="bg-[red] h-10 aspect-square" /> :
                        <img src={img} alt="" />

                }
                <button onClick={ () => { props.setIsFormDataValid(false) } }>Back</button>
                <button onClick={handleRegister}>Upload</button>
            </div>
        </div>

        
    )
}


export default RegisterProfileImgForm

