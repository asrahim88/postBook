import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import ShowPost from '../ShowPost/ShowPost';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "25px"
  },
  paper: {
   marginBottom: "25px"
  },
}));

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
        
    }, [])
    const classes = useStyles();
    
    return (
      <Container minWidth="sm" className={classes.root}>
      <Grid className = {classes.paper} container spacing={1} >
      {
        posts.map( post => <ShowPost key = {post.id} post = {post}></ShowPost>)
      }
      </Grid>
      </Container>
  );
};

export default Post;