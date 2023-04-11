import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import { Postings } from "./Postings";
import { SinglePost } from "./SinglePost";


const RRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register/>}></Route>        
        <Route path="/home" element={<Register />}></Route>
        <Route path="/posts" element={<Postings />}></Route>
        <Route path="/posts/:id" element={<SinglePost />}></Route>
        <Route path="/profile" element={<Register />}></Route>       
      </Routes>
    </div>
  );
};

export default RRoutes;