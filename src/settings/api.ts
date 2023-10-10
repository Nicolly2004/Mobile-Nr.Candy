import axios from "axios";


export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
     headers: {
        "Contente-Type": "application/json",
        "Accept": "application/json",
     },
     withCredentials: true,
});