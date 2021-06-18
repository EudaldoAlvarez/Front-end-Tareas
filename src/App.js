import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import TablaTareas from "./components/organisms/Tareas/TablaTareas"
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
              redirect="/Consultar"
              userShouldBeAuth={false}
              component={<Login />}
            />
          )}
        />
        <Route
        path="/Consultar" 
        exact
          component={() => (
            <PrivateRoute
              redirect="/"
              userShouldBeAuth={true}
              component={<TablaTareas />}
            />
          )}
        />

      </Switch>
    </Router>
  );
}

export default App;
