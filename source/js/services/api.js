import axios from 'axios';

export const fetchData = () => {
    return axios.get('http://localhost/budget/backend/api.php?type=getCoop&id=1')
}

getData() {
    {fetchData().then(r => console.log(r))}
}
