import axios from "axios";

const baseUrl = "https://api.storerestapi.com";

export const api = axios.create({
  baseURL: baseUrl,
});
