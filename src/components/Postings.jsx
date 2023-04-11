// @flow
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/auth";
import PostElement from "../components/PostElement";
import "../App.css";

export const Postings = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetchPosts();
      setPosts(response.data.posts);
      console.log(response.data.posts);
    };
    fetchAllPosts();
  }, []);
  return (
    <div>
      {posts.map(
        ({ _id, title, location, price, description, createdAt, updatedAt }) => (
          <div key={{ _id }}>
            <PostElement
              id={_id}
              title={title}
              location={location}
              price={price}
              description={description}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          </div>
        )
      )}
    </div>
  );
};
