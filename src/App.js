import logo from "./logo.svg";
import "./App.css";
import "./style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
