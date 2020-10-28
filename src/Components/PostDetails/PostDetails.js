import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import "./PostDtails.css";
import { Container } from '@material-ui/core';
import Comments from '../Comments/Comments';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    marginTop: "25px",
    padding: "10px",
    border: "1px solid #81D4FA",
    borderRadius: "5px",
    textAlign: "justify",
    boxShadow: "2px 2px 5px 2px gray"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));


const PostDetails = () => {
    const {id} = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    // this is post's json.
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
        
    }, [])

    // this is comment's json .
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setComments(data);
          
        })
    }, [])

    const {title, body} = post;
    const classes = useStyles();
    
    return (
      <div>
        <Container align="center">
        <div>
        <Card className={classes.root}>

        <Typography variant="body2" color="textSecondary" component="p">
        <div>
        <h1 style = {{color: "#03A9F4"}}> {title} </h1>
        </div>
        </Typography>
        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p> {body} </p>
          </Typography>
        </CardContent>
       
        <CardActions disableSpacing >
        <IconButton aria-label="add to favorites" style = {{color: "#00BCD4"}}>
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share" style = {{color: "#00BCD4"}}>
          <ShareIcon />
        </IconButton>
        
        </CardActions>
        </Card>
      </div>
      {
        comments.map(commentData => <Comments commentData ={commentData}></Comments> )
      }
      </Container>
      </div>
      
        
    );
};

export default PostDetails;