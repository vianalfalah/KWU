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
import { PrivateRoute } from "./component/PrivateRoute";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import routers from "./routes";
dom.watch();
// const isLogin = localStorage.getItem("token");

function App() {
  const dispatch = useDispatch();
  const { isLogin, loading } = useSelector((state) => state.auth);
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
            <Route
              exact
              path="/landing"
              name="Landing Page"
              render={(props) => <Landing {...props} />}
            />
            {routers.map((route, idx) => {
              return route.component ? (
                <>
                  <Navbar />
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                </>
              ) : null;
            })}
            {isLogin ? (
              <Redirect from="/" to="/home" />
            ) : (
              <Redirect from="/" to="/landing" />
            )}
          </Switch>
        </BlockUi>
      </Router>
    </div>
  );
}

export default App;
