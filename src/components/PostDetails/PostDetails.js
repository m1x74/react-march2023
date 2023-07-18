import React from 'react';

const PostDetails = ({postdet}) => {
    const {userId,id,title,body}=postdet
    return (
        <div>
            UserId: {userId}
            ID: {id}
            Title: {title}
            Body: {body}
        </div>
    );
};

export default PostDetails;