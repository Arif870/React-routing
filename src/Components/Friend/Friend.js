import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

export default function Friend(props) {
  const { id, name, email, address, phone } = props.friend;
  const history = useHistory();

  let clickHandler = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div className="frienddesign">
      <h2>Name : {name}</h2>
      <small>Phone : {phone}</small>
      <p>Gmail : {email} </p>
      <p>City : {address.city}</p>
      <Link to={`/friend/${id}`}>Details</Link>
      <br />
      <br />
      <Link to={`/friend/${id}`}>
        <button>Details</button>
      </Link>
      <br />
      <br />
      <button onClick={clickHandler}>Details</button>
    </div>
  );
}
