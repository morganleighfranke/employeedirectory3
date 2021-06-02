import axios from "axios";
// axios connects to API 
let api = {
  getMultipleUsers: function() {
    return axios.get("https://randomuser.me/api/?results=75&nat=us");
  },
};

export default api;
