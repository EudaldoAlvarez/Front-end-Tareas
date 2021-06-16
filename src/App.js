import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Secret from "./components/pages/Secret";
import PrivateRoute from "./utils/auth/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <PrivateRoute
              redirect="/secret"
              userShouldBeAuth={false}
              component={<Login />}
            />
          )}
        />
        <Route path="/public">
          <h1>Publico</h1>
        </Route>
        <Route
          component={() => <PrivateRoute redirect="/" component={<Secret />} />}
        >
          {/* <Secret /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
