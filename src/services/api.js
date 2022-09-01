import axios from "axios";

const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

/*
  Model

  import api from "./services/api";

  api
     .get("/url") || .post("/url", function() {})
     .then((response) => ... )
     .catch((err) => ... );

*/
