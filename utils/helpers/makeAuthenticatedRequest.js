import {
  getAccessToken,
  isTokenExpired,
  refreshToken,
} from "../../config/http";
async function makeAuthenticatedRequest(url, options = {}) {
  const accessToken = localStorage.getItem("accessToken");

  if (isTokenExpired(accessToken)) {
    await refreshToken();
    // Update the accessToken after refresh
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default makeAuthenticatedRequest;
