import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/all",
});

export default httpClient;