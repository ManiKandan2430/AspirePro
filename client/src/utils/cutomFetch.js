import axios from "axios";
import Cookies from "js-cookie";

export const customFetch = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});
customFetch.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});