import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  function handleUser(e) {
    if (e.target.type === "text") {
      if (e.target.value.length < 6) {
        setError("Username must be at least 6 characters");
      } else {
        setError("");
        setUser({ ...user, username: e.target.value });
      }
    }
    if (e.target.type === "email") {
      setUser({ ...user, email: e.target.value });
    }

    if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
    }
  }

  const handleFocus = (e) => {
    e.target.style.border = "solid 5px red";
  };
  const handleRemoveFocus = (e) => {
    e.target.style.border = "none";
  };

  const handleData = (e) => {
    e.preventDefault();
    const h2 = document.querySelector("h2");
    h2.innerHTML = `Username: ${user.username} <br/> Email: ${user.email} <br/> Password: ${user.password}`;
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={handleUser}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          required
        />
        <small>{error}</small>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handleUser}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleUser}
          onFocus={handleFocus}
          onBlur={handleRemoveFocus}
          required
        />
        <button onClick={handleData}>Register</button>
      </form>
      <h2>

      </h2>
    </div>
  );
}

export default Register;
