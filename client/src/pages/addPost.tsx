

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertFileToBase64 } from "../functions/file-conversion";
import { createPost } from "../functions/api";
import { useAppSelector } from "../app/hooks";
import Navbar from "../components/navbar";

export interface PostData {
    image: string;
    caption: string;
    user_id: string;
}
interface PostDataErrors {
    image?: string;
    caption?: string
}

const AddPost = () => {


    const [postImage, setPostImage] = useState<string>('');
    const [caption, setCaption] = useState<string>('');
    const [errors, setErrors] = useState<PostDataErrors>({});
    const signedInUserId = useAppSelector( (state) => state.signedInUser.id)

    const navigate = useNavigate();

    const handleFileUpload = async (e:any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const base64 = await convertFileToBase64(file);
        setPostImage(base64);
    }

    const handleCreatePost = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        const formData: PostData = {
            image: postImage,
            caption: caption,
            user_id: signedInUserId,
        }
        try {
            await createPost(formData)
            navigate('/home')
        } catch(err:any){
            setErrors(err)
            console.log(err)
        }
    }  

    return (

        <div className="flex flex-col h-screen">
            <div className="bg-gradient-to-r from-primary-purple to-secondary-purple w-screen sticky top-0 z-50">
                <h1 className="text-primary-white px-2 py-1 text-[28px]">Pikky</h1>
            </div>
            
            <img src={postImage} alt="" className="w-[50%] aspect-square"/>

            <div className="flex-1">
                <input 
                    type="file"
                    name="myFile"
                    id="file-upload"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleFileUpload}
                />
                <div className="inputField relative">
                    <input type="text" value={caption} onChange={ (e:React.ChangeEvent<HTMLInputElement>) => { setCaption(e.target.value) }} required/>
                </div>
                
                <img src={postImage} alt="" />
                <button onClick={handleCreatePost}>Upload</button>
            </div>

            <Navbar />
        </div>
    )
}


export default AddPost