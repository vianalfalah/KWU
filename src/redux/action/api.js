import axios from "axios";
const config = {
  Accept: "application/json",
  "Access-Type": "Website",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const configUpload = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const configPut = {
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "multipart/form-data",
};

export const apiGet = (url) => {
  const response = axios
    .get(url, {
      headers: config,
    })
    .then((response) => response)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const apiGets = (url, data) => {
  return axios.get(url, {
    headers: config,
  });
};

export const apiPost = (url, body) => {
  const response = axios
    .post(url, body, {
      headers: config,
    })
    .then((response) => response)
    .catch((err) => {
      return err.response;
    });

  return response;
};

export const apiPost2 = (url, body) => {
  return axios.post(url, body, {
    headers: config,
  });
};

export const apiPost3 = (url, body) => {
  return axios.post(url, body, {
    headers: configUpload,
  });
};

export const apiDelete = (url) => {
  const response = axios
    .delete(url, {
      headers: config,
    })
    .then((response) => response)
    .catch((err) => {
      return err.response;
    });
  return response;
};

export const apiDeletes = (url) => {
  return axios.delete(url, {
    headers: config,
  });
};

export const apiPut = (url, data) => {
  const response = axios
    .put(url, data, {
      headers: configPut,
    })
    .then((response) => response)
    .catch((err) => {
      return err.response;
    });

  return response;
};

export const apiPut2 = (url, data) => {
  return axios.put(url, data, {
    headers: configPut,
  });
};
