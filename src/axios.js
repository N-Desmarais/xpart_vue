import axios from "axios";

export default axios.create({
  baseURL: "https://nostromoxpart.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
