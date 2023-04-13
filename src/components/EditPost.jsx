import React, { useState } from "react";
import { updatePost } from "../api/post";

function EditPost({ id }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleCheckboxChange = (e) => {
    setWillDeliver(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await updatePost(
      id,
      token,
      title,
      description,
      price,
      location,
      willDeliver
    );
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Asking Price"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <label>
          Willing to deliver:
          <input
            type="checkbox"
            checked={willDeliver}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
}

export default EditPost;
