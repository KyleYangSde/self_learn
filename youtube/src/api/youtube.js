import axios from "axios";

//CONST VALUE 大写
const KEY = "AIzaSyAcmXLT_rcF5Vsy-UwtAl_RaQSjkaGZM8g";

//restriction key 安全

//preconfiger url and axios default parameters
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    max: 10,
    key: KEY
  }
});
