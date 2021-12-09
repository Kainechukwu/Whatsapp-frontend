import axios from "axios";

export default class API {
    static post(url, data, successCallback, errorCallback) {
        axios.post(url, data)
            .then(successCallback)
            .catch(errorCallback)
    }
}