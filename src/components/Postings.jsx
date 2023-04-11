// @flow 
import  React, {useEffect, useState} from 'react';
import { fetchPosts } from '../api/auth';

import "../App.css"

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
          {posts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        
            
        </div>
    );
};