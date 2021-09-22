import Home from "./pages/Home";
import "./styles/app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
