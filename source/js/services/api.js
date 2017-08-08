import axios from 'axios';
import { API_URL } from '../config';

let api = null;

class Api {
    constructor() {
        this.config = {
            baseURL: API_URL
        }
    }

    get(url, params) {
        return axios({
            baseURL: this.config.baseURL,
            method: 'GET',
            url,
            params
        })
    }

    post(props) {
        return axios({
            baseURL: this.config.baseURL,
            method: 'POST',
            ...props
        })
    }
}

api = new Api();
export default api;
