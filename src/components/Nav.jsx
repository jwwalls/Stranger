import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navDivider">
      <Link className="Navlink" to="/posts">
        posts
      </Link>
      <Link className="Navlink" to="/profile">
        profile
      </Link>
    </div>
  );
};

export default Nav;
