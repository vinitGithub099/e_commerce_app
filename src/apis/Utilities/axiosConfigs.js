import axios from "axios";

/* const baseUrl = "https://api.storerestapi.com"; */
/* const baseUrl = "https://fakestoreapi.com"; */
const baseUrl = "https://dummyjson.com";

export const api = axios.create({
  baseURL: baseUrl,
});
