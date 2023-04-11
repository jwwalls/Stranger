import React, { useState } from "react";
import { login, registerUser } from "../api/auth";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();  
    const token = await registerUser(username, password);

    localStorage.setItem("token", token);
    setToken(token);
    alert("Registration successful");
    
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    localStorage.setItem("token", user.data.token);
    setToken(user.data.token);
    alert("Login successful");
   
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
