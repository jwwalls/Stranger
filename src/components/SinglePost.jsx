// @flow
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts,  deletePost } from "../api/post";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const {
        data: { posts },
      } = await fetchPosts();
      const filteredPosts = posts.filter((post) => post._id === id);
      setPost(filteredPosts[0]);
      console.log(post);
    };
    fetchAllPosts();
  }, []);

  const removePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await deletePost(post._id, token);
    navigate("/posts");
    
  }

  return (
    <div>
  <h1>{post._id}</h1>         
  <h3>{post.title}</h3>
  <h4>{post.location}</h4>
  <h4>{post.price}</h4>
  <h4>{post.description}</h4>
  <h4>{post.createdAt}</h4>
  <h4>{post.updatedAt}</h4>
  {post.messages ? (
    post.messages.map((message) => (
      <div key={message.id}>
        <h5>{message.author}</h5>
        <p>{message.text}</p>
        <p>{message.createdAt}</p>
      </div>
    ))
  ) : (
    <p>No messages found.</p>
  )}
   <button onClick={removePost}>Delete</button>
  <EditPost id={post._id} ></EditPost>
</div>

  );
};
