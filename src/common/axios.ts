import axios from "axios";

const baseAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL as string,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN as string}`,
        "Content-Type": "application/json",
    }
})

export default baseAxios;