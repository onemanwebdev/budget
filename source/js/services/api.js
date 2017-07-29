import axios from 'axios';

export const fetchData = () => {
    return axios.get('http://localhost/budget/backend/api.php?type=getCoop&id=1')
}
