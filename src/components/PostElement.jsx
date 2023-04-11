import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
// UseNavigate()
const PostElement = ({
  id,
  title,
  location,
  price,
  description,
  createdAt,
  updatedAt,
}) => {
  const nav = useNavigate();
  return (
    <div className="book">
      <div className="breedInfo">
        <div>
            
          <h3>{title}</h3>
          <h4>{location}</h4>
          <h4>{price}</h4>
          <h4>{description}</h4>
          <h4>{createdAt}</h4>
          <h4>{updatedAt}</h4>
        </div>

        <button className="daButton" onClick={() => nav(`/posts/${id}`)}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default PostElement;
