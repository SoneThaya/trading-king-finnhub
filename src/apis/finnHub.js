import axios from "axios";

const TOKEN = process.env.REACT_APP_FINN_APIKEY;

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
