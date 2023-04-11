import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe, login } from "./api/auth";
import RRoutes from "./components/Routes";
import Nav from "./components/Nav";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  console.log(user, "User data");
  const logOut = () => {    
    setToken(null);
    setUser({});
    localStorage.removeItem("token");
    
  }

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
      <h1>{user?.username}</h1>
      <button onClick={logOut}>Logout</button>
      <Register setToken={setToken} />     
      <RRoutes /> 
    </div>
    
  );
}

export default App;
