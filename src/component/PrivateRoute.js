import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
