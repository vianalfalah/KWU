import { apiPost, apiPut, apiPost2, apiPut2, apiGets } from "./api";
import { URL } from "./../../config/api";

export const getProfile = (body) => (dispatch) => {
  let url = URL + "/user";
  const request = apiGets(url);
  dispatch({
    type: "GET_PROFILE_START",
  });

  request.then((response) => {
    if (response && response.data.status === "success") {
      dispatch({
        type: "GET_PROFILE_SUCCESS",
        payload: response.data.data.user,
      });
    } else {
      dispatch({
        type: "GET_PROFILE_FAILED",
        payload: "Internal Server Error",
      });
    }
  });
};
