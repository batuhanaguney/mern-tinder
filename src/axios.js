import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-mern-a.herokuapp.com",
});

export default instance;
