import React, {useState} from 'react';
import css from './post.module.css'
import PostDetails from "../PostDetails/PostDetails";

const Post = ({post,setPostDetails}) => {
    const {id,title}=post;
    const [isShow,setShow]=useState(false);

    return (
        <div>
            <div className={css.post}>
                <p>{id}-{title}</p>
                <button onClick={()=>setShow(!isShow)}>{isShow?'Hide':'Show'}</button>

            </div>
            {isShow&&<PostDetails postdet={post}/>}
        </div>

    );
};

export default Post;