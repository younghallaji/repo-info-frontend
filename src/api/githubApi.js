import axios from "axios";

const API_BASE_URL = "http://localhost:5000/v1/api/github"; 

export const fetchRepoInfo = async (repoNames) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/repo_info`, {
      params: { repoNames },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};
