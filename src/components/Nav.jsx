import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navLinks" >
      
      <Link class="Navlink" to="/">Stranger's Things</Link>
      <div className="navDivider">      
      <Link class="Navlink" to="/posts">posts</Link>
      <Link class="Navlink" to="/profile">profile</Link>
      </div>
     
     
      
    </div>
  );
};

export default Nav;