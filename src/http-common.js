import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://www.mocky.io/v2/5bd2f18e3400006100cfdf83",
  timeout: 1000,
  headers: {
    "Content-type": "application/json"
  }
  /*headers: {
    Authorization: "Bearer {token}"
  }*/
});
