import axios from "axios";

export const API = axios.create({
  baseURL: "https://dwf19fnrk-waysgallery.herokuapp.com/api/v1",
});

export const URL = "https://dwf19fnrk-waysgallery.herokuapp.com/api/v1";

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
