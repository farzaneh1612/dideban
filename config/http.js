// import { PostTokenRefresh, PostTokenVerify } from "@/app/api/api";
import axios from "axios";

// export function getCookie(name) {
//   if (typeof document !== "undefined") {
//     const cookies = document.cookie ? document.cookie.split(";") : [];
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       // Check if the cookie starts with the specified name
//       if (cookie.startsWith(name + "=")) {
//         // Return the value of the cookie
//         return cookie.substring(name.length + 1);
//       }
//     }
//   }
//   return null; // Return null if the cookie is not found
// }

// export const setAuthToken = ({ token, refreshToken, uid }) => {
//   localStorage.setItem("accessToken", token);
//   localStorage.setItem("refreshToken", refreshToken);
//   localStorage.setItem("uid", uid);
//   localStorage.setItem("isHost", isHost);
// };

// export const getAuthToken = () => {
//   try {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("accessToken");
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     console.error("Error retrieving token:", error);
//     return undefined;
//   }
// };
// export const getRefreshToken = () => {
//   try {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("refreshToken");
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     console.error("Error retrieving token:", error);
//     return undefined;
//   }
// };
// export const getIsHost = () => {
//   try {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("isHost");
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     console.error("Error retrieving token:", error);
//     return undefined;
//   }
// };
// export const getUid = () => {
//   try {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("uid");
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     console.error("Error retrieving uid:", error);
//     return undefined;
//   }
// };
// export const getUseName = () => {
//   try {
//     if (typeof localStorage !== "undefined") {
//       return localStorage.getItem("useName");
//     } else {
//       return undefined;
//     }
//   } catch (error) {
//     console.error("Error retrieving uid:", error);
//     return undefined;
//   }
// };

// export async function isTokenExpired() {
//   try {
//     const response = await http.post(PostTokenVerify, {
//       token: getAuthToken(),
//     });
//     return false;
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     return true;
//   }
// }

// export async function refreshToken() {
//   try {
//     const response = await http.post(PostTokenRefresh, {
//       refresh: getRefreshToken(),
//     });
//     const newAccessToken = response.data.access; // Adjust accordingly based on your response structure
//     if (newAccessToken) {
//       document.cookie = `token=${newAccessToken}; path=/`;

//       return newAccessToken;
//     } else {
//       const localStorageKeys = ["accessToken", "refreshToken", "uid", "isHost"];
//       localStorageKeys.forEach((key) => localStorage.removeItem(key));
//       window.location.href = "/home";
//     }
//   } catch (error) {
//     console.error("Token refresh failed:", error);
//     const localStorageKeys = ["accessToken", "refreshToken", "uid", "isHost"];
//     localStorageKeys.forEach((key) => localStorage.removeItem(key));
//     window.location.href = "/home";

//     throw error;
//   }
// }

// export const httpToken = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${getAuthToken()}`,
//   },

//   baseURL: process.env.BASE_URL,
//   timeout: 30000,
// });

// httpToken.interceptors.request.use(async (config) => {
//   // Check if the token is expired
//   if (await isTokenExpired()) {
//     // Refresh the token
//     const newAccessToken = await refreshToken();
//     // Update the accessToken in the headers after refresh
//     config.headers.Authorization = `Bearer ${newAccessToken}`;
//   }

//   return config;
// });

// httpToken.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error && error.response && error.response.status === 401) {
//       // Token expired or invalid, try refreshing
//       try {
//         const newAccessToken = await refreshToken();
//         // Retry the original request with the new token
//         error.config.headers.Authorization = `Bearer ${newAccessToken}`;
//         return httpToken(error.config);
//       } catch (refreshError) {
//         console.error("Error refreshing token:", refreshError);
//         // Handle error, possibly redirect to login page or trigger logout
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },

  baseURL: process.env.BASE_URL,
  timeout: 30000,
});

export default http;
