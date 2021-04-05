import { apiPost, apiPut, apiPost2, apiPut2, apiGets } from "./api";
import { URL } from "./../../config/api";

export const getPosts = (body) => (dispatch) => {
  let url = URL + "/posts";
  const request = apiGets(url);
  dispatch({
    type: "GET_POSTS_START",
  });

  request.then((response) => {
    if (response && response.data.status === "success") {
      dispatch({
        type: "GET_POSTS_SUCCESS",
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: "GET_POSTS_FAILED",
        payload: "Internal Server Error",
      });
    }
  });
};
