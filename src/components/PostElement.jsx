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
    <div className="postCard">
      <div className="postHeader">
      <h1>{title}</h1>
      <button className="daButton" onClick={() => nav(`/posts/${id}`)}>
        More Info
      </button>
      </div>
      <div className="table">
      <table>
 
 
  <tr>
    <td>Location</td>
    <td>{location}</td>
  </tr>
  <tr>
    <td>Asking Price</td>
    <td>{price}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{description}</td>
  </tr>
  <tr>
    <td>Posted At</td>
    <td>{createdAt}</td>
  </tr>
  <tr>
    <td>Last Update</td>
    <td>{updatedAt}</td>
  </tr>
</table>
</div>
    </div>
  );
};

export default PostElement;
