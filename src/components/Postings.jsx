// @flow
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/auth";
import PostElement from "../components/PostElement";
import "../App.css";

export const Postings = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const fetchAllPosts = async () => {
        const { data: { posts } } = await fetchPosts();
        setPosts(posts);
      };
      fetchAllPosts();
    }, []);
  
    const filteredPosts = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const location = post.location.toLowerCase();
      const description = post.description.toLowerCase();
      const search = searchTerm.toLowerCase();
      return (
        title.includes(search) ||
        location.includes(search) ||
        description.includes(search)
      );
    });
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        {filteredPosts.map(
          ({ _id, title, location, price, description, createdAt, updatedAt }) => (
            <div key={_id}>
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