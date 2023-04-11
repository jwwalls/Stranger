import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe, login } from "./api/auth";
import RRoutes from "./components/Routes";
import Nav from "./components/Nav";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
   
  const logOut = () => {
    setToken(null);
    setUser({});
    localStorage.removeItem("token");
    alert("You have been logged out");
  };
  useEffect(() => {
    const getMe = async () => {
      const { data } = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);
  return (
    <div className="App">
      <Nav></Nav>      
      <div className="navBar">
      <div className="userName">Logged in as: {user?.username}</div>
        <button className="logoutButton" onClick={logOut}>
          Logout
        </button>
      </div>
      <RRoutes setToken={setToken} />
    </div>
  );
}

export default App;
