import axios from "axios";


export const createAxiosInstance = () => {
  return axios.create({
    // baseURL: 'http://localhost:8080/',
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:8080/api/"
        : "http://localhost:8080/api/",
    headers: {
      authorization: "Bearer " + localStorage.getItem("access_token"),
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
};

