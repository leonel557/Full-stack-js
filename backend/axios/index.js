const axios = require("axios");

const instance = axios.create({
  baseURL: "https://echo-serv.tbxnet.com/v1",
  timeout: 10000,
  headers: {
    authorization: process.env.BEARER_TOKEN,
  },
});

module.exports = instance;
