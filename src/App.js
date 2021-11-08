import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Users from "./components/users/Users";
import User from "./components/user/User";
import UsersContext from "./providers/UsersContext";
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
    <UsersContext.Provider value={users}>
      <div className="App">
        <header className="App-header">
          <h1 id="users-heading">Random Developers</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/user/:username">
              <User />
            </Route>
          </Switch>
        </Router>
      </div>
    </UsersContext.Provider>
  );
}

export default App;
