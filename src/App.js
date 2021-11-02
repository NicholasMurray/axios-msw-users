import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import "./App.css";

export const usersURL = "https://randomuser.me/api/?results=16";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(usersURL)
      .then((response) => response.data)
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="users-heading">Users</h1>
      </header>
      <Users users={users} />
    </div>
  );
}

export default App;
