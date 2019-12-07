import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [posts, setPosts] = useState({
    postList: []
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.post.value)
    // axios.post("/api/post", {
    //   newPost: event.target.post.value
    // }).then(() => { getPosts() })
  }

  useEffect(() => {
    getPosts();
  }, [posts.postList] )

  async function getPosts() {
    let allPosts = await axios.get("/api/posts");
    if (allPosts !== posts.postList) {
      setPosts({ postList: allPosts.data })
      console.log(posts.postList)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter post (200 characters or less)" name="post" />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default App;
