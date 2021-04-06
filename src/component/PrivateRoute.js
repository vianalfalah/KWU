import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
function PrivateRoute({ children, ...rest }) {
  // const { component: Component, ...rest } = props;

  const { isLogin } = useSelector((state) => state.auth);
  console.log(isLogin);
  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? children : <Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
