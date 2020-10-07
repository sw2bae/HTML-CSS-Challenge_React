import axios from "axios";
export default {
    getDogs: function (breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images/random/3");
    },
    getRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random/3");
    }
};