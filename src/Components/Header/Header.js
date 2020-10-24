import React from 'react';
import {  makeStyles, Typography, Toolbar, AppBar, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const Header = () => {
    const classes = useStyles();
    const clickHandler = () => {
        alert("Skip Please")
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        PoStBoOk
                    </Typography>
                    <div>
                    <Button onClick ={clickHandler}  style= {{color: "white", width: "120px"}}>
                        SIGN UP
                    </Button>
                    <Button onClick ={clickHandler}  style= {{color: "white", width: "120px"}}>
                        LOG IN
                    </Button>
                    </div>
                </Toolbar>
                </Container>
            </AppBar> 
        </div>
    );
};

export default Header;