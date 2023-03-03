import axios from "axios";

const URL = "http://localhost:4000";

class API {
  async get(url) {
    const baseUrl =
      process.env.NODE_ENV === "development" ? URL : process.env.API_URL;
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  }
}

export default new API();
