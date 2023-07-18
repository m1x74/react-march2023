import {useEffect, useState} from 'react';
import Post from "../Post/Post";
import post from "../Post/Post";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))},[]);

    console.log(posts)
return(

    <div>

        {
            posts.map((posts)=>
                <Post key={posts.id} post={posts}/>
           )

        }

    </div>
)
};

export default Posts;