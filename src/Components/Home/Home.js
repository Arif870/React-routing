import React from "react";
import Posts from "../Posts/Posts";

export default function Home() {
  return (
    <div>
      <h1 style={{ fontWeight: "300" }}>Recent Posts</h1>
      <hr />
      <Posts />
    </div>
  );
}
