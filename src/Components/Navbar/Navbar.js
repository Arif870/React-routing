import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"> About</NavLink>
        </li>
        <li>
          <NavLink to="/friends"> Friends</NavLink>
        </li>
      </ul>
    </div>
  );
}
