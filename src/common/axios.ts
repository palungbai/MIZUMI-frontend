import axios from "axios";

const token = localStorage.getItem("token");

const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default baseAxios;
