import axios from "axios";

const API = axios.create({
  baseURL: "https://foodbridge-ai-d603.onrender.com/api",
});

export default API;