import React, { useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const [userData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    role: "Admin",
  });

  return (
    <div>
      <h1> Dashboard </h1>{" "}
      <div>
        <h2> Welcome, {userData.username}! </h2>{" "}
        <p> Email: {userData.email} </p> <p> Role: {userData.role} </p>{" "}
      </div>{" "}
      <div>
        {" "}
        {} <h3> Recent Activity </h3>{" "}
        <ul>
          <li> Logged in at 10: 00 AM </li> <li> Viewed profile </li>{" "}
          <li> Updated settings </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}

export default Dashboard;
