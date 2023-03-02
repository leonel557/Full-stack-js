import axios from "axios";

const URL = "http://localhost:4000";

const axiosClient = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? URL : process.env.API_URL,
});

class API {
  async get(url) {
    const response = await axiosClient.get(url);
    return response.data
  }
}

export default new API();
