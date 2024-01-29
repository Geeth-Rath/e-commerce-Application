
import axios from 'axios';
let accessToken = null;
export const setAccessToken = (token) => {
  accessToken = token;
};
export const getAccessToken = () => {
  return accessToken;
};
export const refreshAccessToken = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/refresh-token');
    const newAccessToken = response.data.token;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};
