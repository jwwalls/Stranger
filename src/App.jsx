import "./App.css";
import { useState, useEffect } from "react";
import { fetchMe } from "./api/auth";
import RRoutes from "./components/Routes";
import Nav from "./components/Nav";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    setUser({});
    localStorage.removeItem("token");
    alert("You have been logged out");
    navigate("/");
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
      <div className="navBar">
        <Link className="navTitle" to="/">
          Stranger's Things
        </Link>
        <div className="navEnd">
          <Nav></Nav>
          <div className="userName">{user?.username}</div>
          {token ? (
            <button className="logoutButton" onClick={logOut}>
              Logout
            </button>
          ) : (
            <button className="loginButton" onClick={() => navigate("/")}>
              Login
            </button>
          )}
        </div>
      </div>
      <RRoutes setToken={setToken} />
    </div>
  );
}

export default App;
