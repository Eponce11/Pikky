
import { useState } from "react";
import { newComment } from "../functions/api";

const CommentPage = () => {


    const [comment, setComment] = useState<string>('');

    const handleCommentSubmit = async () : Promise<void> => {
        try {
            const commentResponse = await newComment(comment)
            console.log(commentResponse)
        } catch (err: any) {
            console.log(err)
        }

    }

    return (
        <div>
            <input 
                type="text"
                value={comment}
                onChange={ (e) => setComment(e.target.value) }
            />
            <button onClick={handleCommentSubmit}>Send</button>
        </div>
    )
}

export default CommentPage;