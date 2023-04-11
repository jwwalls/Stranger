// @flow 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const singlePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}/posts/${id}`)
          .then(res => res.json())
          .then(data => setPost(data));
          console.log(post);
    }, [id]);
    return (
        <div>
            post
        </div>
    );
};
