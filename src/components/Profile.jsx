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
            <div>{user.username}</div>
            <div>{user.cohort}</div>
            {user.messages && user.messages.map((message) => (
                <div key={message._id}>{message.content}{message.fromUser.username}{message.post.title}
                </div>
            ))}
            {user.posts && user.posts.map((post) => (
                <div key={post._id}>{post.title}{post.price}{post.location}{post.description}</div>
            ))}

            }
        </div>
    );
    
};