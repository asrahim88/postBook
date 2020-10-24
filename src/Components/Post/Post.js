import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    
    return (
        
        <Container>
            <h1>Post Length: {post.length}</h1>
           
            

        </Container>
    );
};

export default Post;