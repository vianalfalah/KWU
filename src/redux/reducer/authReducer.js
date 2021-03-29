import { updateObject } from "./utility";

const initialState = {
  user: null,
  message: "",
  loading: false,
  successLogin: false,
  isLogin: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      window.location.reload();
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
        successLogin: true,
      };
    case "FAILED_LOGIN":
      return updateObject(state, {
        message: action.payload,
        loading: false,
        successLogin: false,
        isLogin: false,
      });
    case "LOGIN_START":
      return {
        ...state,
        isLogin: true,

        loading: true,
        successLogin: true,
      };
    case "REGIS_SUCCESS":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
        successLogin: true,
      };
    case "FAILED_REGIS":
      return updateObject(state, {
        message: action.payload,
        loading: false,
        successLogin: false,
        isLogin: false,
      });
    case "REGIS_START":
      return {
        ...state,
        isLogin: true,

        loading: true,
        successLogin: true,
      };

    default:
      return state;
  }
}
