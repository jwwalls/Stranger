// @flow
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts, deletePost, postMessage } from "../api/post";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";
import { fetchMe } from "../api/auth";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
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
    };
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      const response = await fetchMe(token);
      setUser(response.data);
    };
    fetchData();
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
      {Object.keys(user).length > 0 && Object.keys(post).length > 0 && (
        <>
          {user.username === post.author.username && (
            <>
              <button onClick={removePost}>Delete</button>
              <button onClick={toggleEdit}>Edit</button>
            </>
          )}
          {user.username !== post.author.username && (
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
          )}
        </>
      )}

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
