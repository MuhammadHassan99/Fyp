import React, { useState } from "react";

// const UserType = {
//   STUDENT: "student",
//   TEACHER: "teacher",
//   ADMIN: "admin",
// };

const Dashboard = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default Dashboard;
