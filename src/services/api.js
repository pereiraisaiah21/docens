import axios from "axios";

const api = axios.create({
  baseURL: "https://tccunipcci.herokuapp.com/api",
});

export default api;
