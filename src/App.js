import logo from "./logo.svg";
import "./App.css";
import "./style.scss";
import "font-awesome/css/font-awesome.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./component/Navbar";
import PrivateRoute from "./component/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import UserP from "./pages/UserProfile/UserP";
import Home from "./pages/Home/Home";

// const isLogin = localStorage.getItem("token");

function App() {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("token");
  const { loading } = useSelector((state) => state.auth);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user != null) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(user) });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <BlockUi blocking={loading} message={"loading...."}>
          <Switch>
            <Route exact path="/" component={Landing} />
            {!isLogin && <Redirect to="/" />}
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/profile" component={UserP} />
          </Switch>
        </BlockUi>
      </Router>
    </div>
  );
}

export default App;
