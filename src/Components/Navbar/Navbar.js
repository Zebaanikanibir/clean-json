
import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
          <Link className="item" to="/home">Home</Link>
          <Link className="item" to="/edit">Edit</Link>
          <Link className="item" to="/delete">Delete</Link>
          <Link className="item" to="/create">Create</Link>
      </ul>
    </div>
  )
}

export default Navbar
