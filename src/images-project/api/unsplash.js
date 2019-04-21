import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6a743abfa319f68ecc5521c98b5c70b9f6bd01c012e141be1132d362e5a11e73"
  }
});
