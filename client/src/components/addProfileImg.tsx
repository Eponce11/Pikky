
import { useState } from "react";
import { convertFileToBase64 } from "../functions/file-conversion";
import { useNavigate } from "react-router-dom";

const AddProfileImg = () => {



    const [postImage, setPostImage] = useState<any>('');
    const [caption, setCaption] = useState<string>('');


    const navigate = useNavigate();

    const handleFileUpload = async (e:any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const base64 = await convertFileToBase64(file);
        setPostImage(base64);
    }

    const handleAddImg = async (e:React.MouseEvent<HTMLElement>): Promise<void> => {
        e.preventDefault();
        try {
            // await createPost(formData)
            // navigate('/home')
        } catch(err:any){
            console.log(err)
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
            <button onClick={handleAddImg}>Upload</button>
        </div>
    )
}

export default AddProfileImg