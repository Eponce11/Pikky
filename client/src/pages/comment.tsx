
import { useState } from "react";

const CommentPage = () => {


    const [comment, setComment] = useState<string>('');

    return (
        <div>
            <input 
                type="text"
                value={comment}
                onChange={ (e) => setComment(e.target.value) }
            />
        </div>
    )
}

export default CommentPage;