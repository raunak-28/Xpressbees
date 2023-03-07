import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginData } from "../Data/LoginData";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [validUser, setValidUser] = useState(false);

  const validation = () => {
    if (password.length < 6) {
      setError({ ...error, passwordError: "Please enter a valid passoword" });
      return false;
    }
    return true;
  };

  useEffect(() => {
    window.sessionStorage.setItem("validUser", false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      const authentication = loginData.filter(
        (data) => data.userName === userName && data.password === password
      );
      if (authentication.length === 1) {
        setValidUser(true);
        navigate("/orders");
        window.sessionStorage.setItem("validUser", true);
      } else {
        setError({
          ...error,
          authenticationError: "Please enter valid username and password",
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          id="userName"
          className="input-text"
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          id="password"
          className="input-text"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && error.passwordError && (
          <div className="error">{error.passwordError}</div>
        )}
        {error && !error.passwordError && error.authenticationError && (
          <div className="error">{error.authenticationError}</div>
        )}
        <button id="login_btn" className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
