import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Users from "./components/users/Users";
import User from "./components/user/User";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
