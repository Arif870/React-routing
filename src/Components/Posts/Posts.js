import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Post from "../Post/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
