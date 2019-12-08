import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PostCards from "./components/PostCards.js"

function App() {
  const [posts, setPosts] = useState({
    postList: []
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    if (event.target.post.value.length <= 200) {
      axios.post("/api/post", {
        newPost: event.target.post.value
      }).then(() => { getPosts() })
    } else {
      console.log("Post is longer than 200 characters!")
    }
  }

  useEffect(() => {
    getPosts();
  }, [posts] )

  async function getPosts() {
    let allPosts = await axios.get("/api/posts");
    if (JSON.stringify(allPosts.data) !== JSON.stringify(posts.postList)) {
      setPosts({ postList: allPosts.data })
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter post (200 characters or less)" name="post" />
        <button type="submit">Submit Post</button>
      </form>
      <PostCards posts={posts.postList} />
    </div>
  );
}

export default App;
