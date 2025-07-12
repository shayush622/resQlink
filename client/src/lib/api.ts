import axios from "axios";

export const api = axios.create({
  baseURL: 'https://res-qlink-server.vercel.app/api',
  withCredentials: true,
});
