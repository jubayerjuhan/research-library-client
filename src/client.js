import axios from "axios";

export const client = axios.create({
  baseURL: "https://research-library.onrender.com/",
});
