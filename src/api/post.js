const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)  
      const result = await response.json();    
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  export const makePost = async (token, title, description, price, location, willDeliver) => {
    console.log(token, title, description, price, location, willDeliver)
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title ,
            description,
            price,
            location,   
            willDeliver
          }
        })
      });
      const result = await response.json();    
      alert("Post created successfully");
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const updatePost = async (id , token, title, description, price, location, willDeliver) => {
    try {      
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver
          }
        })
      });
      const result = await response.json();     
      alert("Post updated successfully");
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const deletePost = async (id, token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();      
      alert("Post deleted successfully");
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const postMessage = async (id, token, content) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content
          }
        })
      });
      const result = await response.json();
      alert("Message posted successfully");
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  