import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Friend from "../Friend/Friend";
import "../Friend/Friend.css";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div>
      <h1>My total friends : {friends.length}</h1>
      <div className="friend">
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
}
