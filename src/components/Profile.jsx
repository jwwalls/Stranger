// @flow 
import React from 'react';
import { fetchMe } from '../api/auth';
import { useEffect, useState } from 'react';

export const Profile = () => {
    const [user, setUser]  =  useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const fetchData = async () => {
            const response = await fetchMe(token);
            setUser(response.data);
            console.log(response.data);
        }
        fetchData();
    },[]);
    return (
        <div>
          <div className='postText'>Profile</div>
          <div className='profileUser'>Username: {user.username}</div>
          <div className='profileCohort'>Chort: {user.cohort}</div>
          <div className='profileMessages'>
            <div className='messagesText'>Messages</div>
            {user.messages &&
              user.messages.map((message) => (
                <div className='message' key={message._id}>
                     <div>Post title: {message.post.title}</div>
                     <div>From user: {message.fromUser.username}</div>
                  <div>Message Content: {message.content}</div>
                  
                 
                </div>
              ))}
          </div>
      
          <div className='profilePostings'>
            <div className='postingsText'>Postings</div>
            {user.posts &&
              user.posts.map((post) => (
                <div className='post' key={post._id}>
                  <div>Title: {post.title}</div>
                  <div>Price: {post.price}</div>
                  <div>Location: {post.location}</div>
                  <div>Description: {post.description}</div>
                </div>
              ))}
          </div>
        </div>
      );
      
    
};