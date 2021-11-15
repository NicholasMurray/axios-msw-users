import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/react";
import store from "./store/store";
import Users from "./components/users/Users";
import User from "./components/user/User";
import StyledApp from "./app.styles";
import GlobalStyles from "./global.css";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${GlobalStyles}
        `}
      />
      <Provider store={store}>
        <StyledApp>
          <header>
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
        </StyledApp>
      </Provider>
    </>
  );
}

export default App;
