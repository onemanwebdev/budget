import axios from 'axios';
import { API_URL } from '../config';

let api = null;

class Api {
    constructor() {
        this.config = {
            baseURL: API_URL
        }
    }

    get(params) {
        return axios({
            baseURL: this.config.baseURL,
            method: 'GET',
            params
        })
    }

    post(params, data) {
        return axios({
            baseURL: this.config.baseURL,
            method: 'POST',
            params,
            data
        })
    }
}

api = new Api();
export default api;
