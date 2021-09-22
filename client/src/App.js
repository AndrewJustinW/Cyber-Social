import Home from "./pages/Home";
import "./styles/app.scss"
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      <Router basename="/">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
