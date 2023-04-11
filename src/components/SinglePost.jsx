// @flow
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../api/auth";
const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
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

  return (
    <div>
  <h1>{post.id}</h1>         
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
</div>

  );
};
