import logo from "./logo.svg";
import "./App.css";
import "./style.scss";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import { PrivateRoute } from "./component/PrivateRoute";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
