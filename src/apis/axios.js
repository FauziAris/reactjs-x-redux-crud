import axios from "axios";

const api = axios.create({
  timeout: 30000,
  baseURL: "http://dev3.dansmultipro.co.id/api/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use((req) => {
  return req;
});

export { api };
