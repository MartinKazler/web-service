import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../service/UserService";

const Login = ({ setLoggedIn, setToken }) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("wrong input");
  const history = useHistory();

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timerId);
  }, [loading]);

  const loginUser = async (credentials) => {
    const data = await UserService.loginUser(credentials);
    console.log(data + setToken);
    if (data !== "error") {
      setToken(data);
      setLoggedIn();
    } else {
      setLoading(true);
      setError(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!user.username || !user.password) return;
    await loginUser(user);
    history.push("/Product");
  };

  const changeUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(setToken);
  return (
    <>
      <div className="login">
        <form
          style={{
            borderRadius: "10px",
            width: "250px", 
          }}
          onSubmit={handleLogin}
        >
          <h3>{loading ? "Loading" : "Login here"}</h3>
          <input
            type="text"
            name="username"
            value={user.username || ""}
            placeholder="Username"
            style={{ background: "white", width: "100px" }}
            onChange={changeUserData}
            required
          />
          <input
            type="password"
            name="password"
            value={user.password || ""}
            placeholder="Password"
            style={{ background: "white", width: "100px" }}
            onChange={changeUserData}
            required
            autoComplete="off"
          />
          <button
            type="submit"
            style={{ background: "green" }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
