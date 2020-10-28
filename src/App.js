import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/Nomatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
    <div>
    <Router >
    <Header></Header>
    <Switch>
    <Route exact path = "/">
    <Post></Post>
    </Route>
    <Route path = "/postDetails/:id">
    <PostDetails></PostDetails>
    </Route>
    <Route path = "*">
    <NoMatch></NoMatch>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
