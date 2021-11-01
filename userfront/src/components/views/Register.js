import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../service/UserService";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    repassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Invalid information, check your input!");
  const history = useHistory();

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timerId);
  }, [loading]);

  const registerUser = async () => {
    const data = await UserService.registerUser(user);
    setError(error);
    setLoading(true);
    setUser(user);
  };

  const handleRegister = (e) => {
    console.log("Reg");
    e.preventDefault();
    if (user.password === user.repassword) {
      console.log("Reg 38" + user);
      registerUser();
      history.push("/Login");
    } else {
      setError(error);
      setLoading(true);
    }
  };

  const changeUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="register">
        <form
          style={{
            borderRadius: "10px",
            width: "250px",
          }}
          onSubmit={handleRegister}
        >
          <h3>{loading ? "Loading..." : "Register here"}</h3>
          <input
            type="text"
            name="username"
            value={user.username || ""}
            placeholder="Username"
            style={{ background: "white", width: "50px" }}
            onChange={changeUserData}
            required
          />
          <input
            type="password"
            name="password"
            value={user.password || ""}
            placeholder="Password"
            style={{ background: "white", width: "50px" }}
            onChange={changeUserData}
            required
            autoComplete="off"
          />
          <input
            type="password"
            name="repassword"
            value={user.repassword || ""}
            placeholder="Re-enter Password"
            style={{ background: "white", width: "100px" }}
            onChange={changeUserData}
            required
            autoComplete="off"
          />
          <button
            type="submit"
            style={{ background: "green" }}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
