import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
// UseNavigate()
const PostElement = ({ id, name, breed, imageUrl }) => {
  const nav = useNavigate();
  return (
    <div className="book">
     

      <div className="breedInfo">
        <div>
        <div className="dogId">
          <div className="doggoName"> {name}</div>
          <div>Id: {id}</div>
        </div>
          <div>Breed Information</div>
          <div>{breed}</div>
        </div>

        <button className="daButton" onClick={() => nav(`/${id}`)}>
          More Info
        </button>
        
      </div>
      <div class="cover">
      <div className="nameId" >
        <img src={imageUrl} alt="" />
      </div>
        </div>
    </div>
  );
};

export default PostElement;