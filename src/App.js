import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import PrivateRoute from "./utils/auth/PrivateRoute";
import Tareas from  "./components/pages/Tareas";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <PrivateRoute
              redirect="/Tareas"
              userShouldBeAuth={false}
              component={<Login />}
            />
          )}
        />
        <Route
          path="/Tareas"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<Tareas />}
            />
          )}
        />
        <Route
          path="/registro"
          exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={false}
              component={<Registro/>}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
