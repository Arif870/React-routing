import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";

export default function Postdetails() {
  let { postId } = useParams();
  let [post, setPost] = useState({});
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setPost(data));
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
