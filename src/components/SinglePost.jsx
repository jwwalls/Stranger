// @flow
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts, deletePost } from "../api/post";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [editEnabled, setEditEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPosts = async () => {
      const {
        data: { posts },
      } = await fetchPosts();
      const filteredPosts = posts.filter((post) => post._id === id);
      setPost(filteredPosts[0]);
    };
    fetchAllPosts();
  }, []);

  const removePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await deletePost(post._id, token);
    navigate("/posts");
  };

  const toggleEdit = () => {
    setEditEnabled(!editEnabled);
  };

  return (
    <div>
      <div>Title: {post.title}</div>
      <div>Location: {post.location}</div>
      <div>Price: {post.price}</div>
      <div>Description {post.description}</div>
      <div>Posted At: {post.createdAt}</div>
      <div>Updated at: {post.updatedAt}</div>
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
      <button onClick={toggleEdit}>Edit</button>
      {editEnabled && <EditPost id={post._id} />}
    </div>
  );
};
