import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
    return (
        
        <Container>
            <h1>Post Length: {posts.length}</h1>
            {
                posts.map(post => <PostDetails post = {posts}></PostDetails>)
            }
            
           
            

        </Container>
    );
};

export default Post;