import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    //capital A
    Authorization:
      "Client-ID 111bf97145f5da2c01111df2904107a59afe3b50154ea65c73ecf8081abb2eff"
  }
});
