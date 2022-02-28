import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";

import "./App.css";

// const UserType = {
//   STUDENT: "student",
//   TEACHER: "teacher",
//   ADMIN: "admin",
// };

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState("");
  if (!token) {
    return <Login setToken={setToken} setUser={setUser} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
};

export default App;
