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
import Home from "./pages/Home/Home";
import UserP from "./pages/UserProfile/UserP";
import Navbar from "./component/Navbar";
import { PrivateRoute } from "./component/PrivateRoute";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
dom.watch();
// const isLogin = localStorage.getItem("token");

function App() {
  const dispatch = useDispatch();
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
            <Route exact path="/home" component={Layout} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BlockUi>
      </Router>
    </div>
  );
}

const Layout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div>
      {isLogin ? (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/profile" component={UserP} /> */}
          </Switch>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default App;
