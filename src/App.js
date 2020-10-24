import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Post></Post>
      <PostDetails></PostDetails>
    </div>
  );
}

export default App;
