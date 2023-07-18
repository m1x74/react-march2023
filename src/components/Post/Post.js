import React from 'react';

const Post = ({post}) => {
    const{title,body,userId,id}=post
    return (
        <div>
            <p>UserId: '{userId}'</p>
            <p>Id: '{id}'</p>
            <p>Title: '{title}'</p>
            <p>Body: '{body}'</p>

        </div>
    );
};

export default Post;