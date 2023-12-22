import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = {}

axios.interceptors.request.use((config: any) => {
  config.headers["Accept-Language"] = "en";
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const ex = error.response;

    if (ex && ex.status === 400) {

    } else if (ex && ex.status === 500) {

    } else if (ex && ex.status === 401) {

    } else if (ex && ex.status === 402) {
      
    } else if (ex && ex.status === 403) {

    } else if (ex && ex.status === 404) {

    } else if (ex && ex.status === 406) {

    } else if (ex && ex.status === 409) {

    } else if (ex && ex.status === 429) {

    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
