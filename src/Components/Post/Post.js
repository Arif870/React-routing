import React from "react";
import { useHistory } from "react-router";

export default function Post(props) {
  let { title, id } = props.post;
  let history = useHistory();
  let clickhandlar = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={clickhandlar}>Details</button>
    </div>
  );
}
