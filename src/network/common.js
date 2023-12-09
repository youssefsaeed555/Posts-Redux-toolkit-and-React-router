import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://rtk-apis.onrender.com/",
});
