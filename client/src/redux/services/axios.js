import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4321/api",
  timeout: 5000, // Timeout in milliseconds
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from wherever you store it (localStorage, cookies, etc.)
    const token = localStorage.getItem("token"); // Adjust this based on your authentication mechanism

    // Set the token in the request header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
