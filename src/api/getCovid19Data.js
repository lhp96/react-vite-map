import axios from "axios";

export function getCovidDataList() {
  return axios({
    method: "get",
    url: "https://vyps.api.storeapi.net/api/94/219?format=json&appid=6832&sign=4376a0d8b37115ae1b478f2aa19c09fb",
  });
}

export function getChinaJSON() {
  return axios({
    method: "get",
    url: `https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/china.json`,
  });
}
