import React from "react";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

export default function FriendDetails() {
  const { friendId } = useParams();

  let [friendDetails, setFriendDetails] = useState({});

  let history = useHistory();

  let clickhandler = () => {
    history.push("/friends");
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then(response => response.json())
      .then(data => setFriendDetails(data));
  }, []);

  return (
    <div>
      <h1>About myself no: {friendId}</h1>
      <h1>Name: {friendDetails.name}</h1>
      <h2>Cell: {friendDetails.phone}</h2>
      <p>website: {friendDetails.website}</p>
      <p>Company: {friendDetails.company?.name}</p>
      <br />
      <br />
      <button onClick={clickhandler}>See all friends</button>
    </div>
  );
}
