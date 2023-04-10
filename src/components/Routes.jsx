import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";

const RRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Register}></Route>        
        <Route path="/home" element={Register}></Route>
        <Route path="/posts" element={Register}></Route>
        <Route path="/profile" element={Register}></Route>
       
      </Routes>
    </div>
  );
};

export default RRoutes;