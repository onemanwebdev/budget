import axios from 'axios';
import { API_URL } from '../config';

const fetchData = (params) => {
    return axios({
        baseURL: API_URL,
        method: 'GET',
        params: {
            type: 'getCoop'
        }
    })
}

export default fetchData();
