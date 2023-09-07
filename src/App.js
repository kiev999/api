import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ListofUser from "./ListofUser";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <h1>Social Card</h1>
        {users.map((user, id) => (
          <ListofUser userData={user} />
        ))}
      </header>
    </div>
  );
}

export default UserList;
