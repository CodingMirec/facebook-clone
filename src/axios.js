import axios from "axios";

const instance = axios.create({
  baseURL: "https://fb-mern-stack.herokuapp.com/",
});

export default instance;
