

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
            
            {
                postImage.length === 0 ?
                    <div className="w-[100%] aspect-square bg-black flex items-center justify-center text-white">Insert Image</div> :
                    <img src={postImage} alt="" className="w-[100%] aspect-square"/>
            }
            
            


            <div className="flex-1 bg-green-400 w-[100%]">
                <textarea 
                    value={caption}
                    onChange={ (e:React.ChangeEvent<HTMLTextAreaElement>) => { setCaption(e.target.value) }} 
                    className="h-[100%] bg-transparent w-[100%] resize-none" 
                    required
                />
            </div>

            <div className="flex px-2 justify-between items-center">
                <button className="primary-btn h-9 w-[45%]" onClick={handleCreatePost}>Upload</button>
                <input 
                    type="file"
                    name="myFile"
                    id="file-upload"
                    accept=".jpeg, .png, .jpg"
                    className="my-2 w-[45%]"
                    onChange={handleFileUpload}
                />
            </div>
                
            

            <Navbar />
        </div>
    )
}


export default AddPost