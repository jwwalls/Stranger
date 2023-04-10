import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="headerL" >
      
      <Link class="Navlink" to="/">PUPPY BOWL</Link>
      <Link class="Navlink" to="/home">home</Link>
      <Link class="Navlink" to="/posts">posts</Link>
      <Link class="Navlink" to="/profile">profile</Link>
     
      
    </div>
  );
};

export default Nav;