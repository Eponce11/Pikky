

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertFileToBase64 } from "../functions/file-conversion";
import { createPost } from "../functions/api";


export interface PostData {
    image: any;
    caption: string
}
interface PostDataErrors {
    image?: string;
    caption?: string
}

const AddPost = () => {



    const [postImage, setPostImage] = useState<any>('');
    const [caption, setCaption] = useState<string>('');

    const [errors, setErrors] = useState<PostDataErrors>({});

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
            caption: caption
        }
        try {
            await createPost(formData)
            // navigate('/home')
        } catch(err:any){
            setErrors(err)
        }
    }  

    return (

        <div>
            <h1>Hello World</h1>
            <input 
                type="file"
                name="myFile"
                id="file-upload"
                accept=".jpeg, .png, .jpg"
                onChange={handleFileUpload}
            />

            <input type="text" value={caption} onChange={ (e:React.ChangeEvent<HTMLInputElement>) => { setCaption(e.target.value) }} />
            
            <img src={postImage} alt="" />
            <button onClick={handleCreatePost}>Upload</button>
        </div>
    )
}


export default AddPost