import axios from "axios";

const KEY = "AIzaSyCFqihOiXm104IlWyqXJy8oqRbRI-eUTrg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
