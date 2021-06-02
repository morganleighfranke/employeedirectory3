import axios from "axios";

let api = {
  getMultipleUsers: function() {
    return axios.get("https://randomuser.me/api/?results=75&nat=us");
  },
};

export default api;
