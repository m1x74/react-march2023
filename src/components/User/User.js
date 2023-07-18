import React from 'react';

const User = ({user,setUserId}) => {
    const{id,name}=user
    return (
        <div style={{display:'flex',columnGap:'30px',alignItems:'center'}}>
            <h2>{id}--{name}</h2>
            <button style={{height:'20px'}} onClick={()=>setUserId(id)}>SHOW POSTS</button>
        </div>
    );
};

export default User;