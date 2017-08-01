import axios from 'axios';

const fetchData = () => {
    return axios.get('http://localhost/budget/backend/api.php?type=getCoop&id=1')
}

export default fetchData();
