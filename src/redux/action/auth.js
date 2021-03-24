import { apiPost, apiPut, apiPost2, apiPut2 } from "./api";
import { URL } from "./../../config/api";

export const login = (body) => (dispatch) => {
  let url = URL + "/login";
  const request = apiPost2(url, body);
  dispatch({
    type: "LOGIN_START",
  });

  request.then((response) => {
    if (response && response.data.status === "Login Success") {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });
      localStorage.setItem("token", response.data.data.user.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      window.location.replace("/");
    } else {
      dispatch({
        type: "FAILED_LOGIN",
        payload: "error connection",
      });
    }
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
