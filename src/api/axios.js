import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.57.250.145:3000/api",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;

