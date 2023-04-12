// @flow
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts, deletePost, postMessage } from "../api/post";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [editEnabled, setEditEnabled] = useState(false);
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPosts = async () => {
      const {
        data: { posts },
      } = await fetchPosts();
      const filteredPosts = posts.filter((post) => post._id === id);
      setPost(filteredPosts[0]);
      console.log(filteredPosts[0]);
    };
    fetchAllPosts();
  }, [id]);

  const removePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await deletePost(post._id, token);
    navigate("/posts");
  };

  const toggleEdit = () => {
    setEditEnabled(!editEnabled);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await postMessage(post._id, token, messageText);
    setMessageText("");
    // Refresh the post messages after sending the message
    const {
      data: { posts },
    } = await fetchPosts();
    const filteredPosts = posts.filter((post) => post._id === id);
    setPost(filteredPosts[0]);
  };

  return (
    <div>
      <div>Title: {post.title}</div>
      <div>Location: {post.location}</div>
      <div>Price: {post.price}</div>
      <div>Description: {post.description}</div>
      <div>Posted At: {post.createdAt}</div>
      <div>Updated at: {post.updatedAt}</div>
      <button onClick={removePost}>Delete</button>
      <button onClick={toggleEdit}>Edit</button>
      <form onSubmit={handleMessageSubmit}>
        <label>
          Message:
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button type="submit">Send</button>
      </form>
      {editEnabled && <EditPost id={post._id} />}
      {post.messages && post.messages.length > 0 ? (
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
    </div>
  );
};
