import { updateObject } from "./utility";

const initialState = {
  user: null,
  messageLogin: "",
  loading: false,
  successLogin: false,
  isLogin: false,
  token: "",
};

export default function async(state = initialState, action) {
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
      return {
        ...state,
        // messageLogin: action.payload,
        loading: false,
        successLogin: false,
        isLogin: false,
      };
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
        messageLogin: action.payload,
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
        messageLogin: "",
        loading: false,
        successLogin: false,
        isLogin: false,
        token: "",
      };

    default:
      return state;
  }
}
