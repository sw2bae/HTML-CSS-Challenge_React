import axios from "axios";
export default {
    getDogs: function (breed) {
        return axios.get("https://dog.ceo/api/" + breed + "/image/random");
    }
};