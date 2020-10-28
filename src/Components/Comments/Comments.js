import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    textAlign: "left",
    marginTop: "15px",
    border: "1px solid #81D4FA",
    borderRadius: "5px",
    boxShadow: "2px 2px 5px 2px gray",
    padding: "10px",
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
const Comments = ({commentData}) => {
    const {email, name} = commentData;
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            <Avatar alt="Travis Howard" src="https://loremflickr.com/320/240/paris,girl/all" />
            </Avatar>
        }
            
            title={email}
            subheader={name}
            />
        </Card>

    );
};

export default Comments;