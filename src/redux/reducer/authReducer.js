import { updateObject } from "./utility";

const initialState = {
  user: null,
  message: "",
  loading: false,
  successLogin: false,
  isLogin: false,
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
        successLogin: true,
        token: action.payload.user.token,
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
        loading: true,
      };
    case "REGIS_SUCCESS":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
        successLogin: true,
        token: action.payload.user.token,
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
        loading: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        message: "",
        loading: false,
        successLogin: false,
        isLogin: false,
        token: "",
      };

    default:
      return state;
  }
}
