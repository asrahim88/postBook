import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 363,
    marginBottom: "20px",
    boxShadow: "5px 5px 10px 2px gray",
    borderRadius: "10px",
    border: "1px solid #7986CB"
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

const ShowPost = ({post}) => {
    const {title, body, id} = post;
    const classes = useStyles();
    
    return (
        <div item xs={4}>
         <Container >
          <Grid  >
          <Card className={classes.root}>
          <h3 style = {{height: "25px", padding: "13px", color: "#536DFE"}}>
          {title}
          </h3>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <p style = {{height: "65px", paddingBottom: "10px"}}>{body}</p>
            </Typography>
          </CardContent>

          <Link style={{textDecoration: "none"}} to = {`/postDetails/${id}`} >
          <Button style={{color: "#536DFE", margin: "25px"}} variant = "outlined" > Read Details </Button>
          </Link>
          </Card>
          </Grid>
          </Container>
        </div>
  );
};

export default ShowPost;