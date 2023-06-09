import React, { useState } from "react";
import { login, registerUser } from "../api/auth";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

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
    navigate("/posts");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginContainer">
      <div className="loginText">{isLogin ? "Log In" : "Register"}</div>
      <div>
        {isLogin ? (
          <form className="loginForm" onSubmit={handleLogin}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            ></input>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            ></input>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
      <div className="flipButton">
        <button onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default Register;
