// @flow 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`${BASE_URL}/posts/${id}`);
            const data = await response.json();
            setPost(data);
            console.log(data);
        }
        fetchPost();
    }, []);
    
    return (
        <div>
            post
        </div>
    );
};
