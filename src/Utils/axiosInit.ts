import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://companydatabaseweb.herokuapp.com/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accpet: "application/json",
  },
});

export default axiosConfig;
