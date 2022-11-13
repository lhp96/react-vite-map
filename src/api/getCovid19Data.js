import axios from "axios";

export function getCovidDataList() {
  return axios({
    methods: "get",
    url: "https://vyps.api.storeapi.net/api/94/219?format=json&appid=6832&sign=4376a0d8b37115ae1b478f2aa19c09fb",
  });
}
