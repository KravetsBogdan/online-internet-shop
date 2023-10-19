import axios from "axios";

const baseApiUrl = "https://tests-red.vercel.app/api";

// Функція для відправки запитів
const sendRequest = async (method, endpoint, data = null, token = null) => {
  try {
    const headers = {};
    if (token) {
      headers.Authorization = token;
    }

    const response = await axios({
      method,
      url: `${baseApiUrl}${endpoint}`,
      data,
      headers,
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};

export default sendRequest;
