import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import { Postings } from "./Postings";
import { SinglePost } from "./SinglePost";
import AddPost from "./AddPost";
import { Profile } from "./Profile";


const RRoutes = ({setToken}) => {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register setToken={setToken}/>}></Route>        
        
        <Route path="/posts" element={<Postings />}></Route>
        <Route path="/posts/add" element={<AddPost />}></Route>
        <Route path="/posts/:id" element={<SinglePost />}></Route>
        <Route path="/profile" element={<Profile />}></Route>       
      </Routes>
    </div>
  );
};

export default RRoutes;