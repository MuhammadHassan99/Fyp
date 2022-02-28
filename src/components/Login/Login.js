import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

// async function loginUser(credentials) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

const UserType = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

const Login = ({ setToken, setUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password,
    // });
    setToken(true);
    console.log("username=", username);
    console.log("password=", password);
    // console.log("user=", user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (UserType.TEACHER === e.target.value) {
      setUser("teacher");
    } else if (UserType.STUDENT === e.target.value) {
      setUser("student");
    } else {
      setUser("admin");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="form-container">
        <h1>Please Log In</h1>
        <div
          class="btn-group me-2 btn-div"
          role="group"
          aria-label="First group"
        >
          <button
            type="button"
            className="btnClass btn btn-primary button"
            onClick={handleChange}
            value="teacher"
          >
            Teacher
          </button>
          <button
            type="button"
            className="btnClass btn btn-primary button"
            onClick={handleChange}
            value="student"
          >
            Student
          </button>
          <button
            type="button"
            className="btnClass btn btn-primary button"
            onClick={handleChange}
            value="admin"
          >
            Admin
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="d-grid gap-2 submit-btn">
            <Button variant="primary" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
