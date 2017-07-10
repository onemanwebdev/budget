import axios from 'axios';

class api {
    data() {
        axios({
            url: '/invoice/backend/api.php',
            params: {
                y: 2017,
                m: '07'
            }
        })
        .then(function(response) {
            console.log(1);
            console.log(response.data[0]);
            return response.data[0];
        })
        .catch(function(error) {
            console.log(2);
            console.log(error);
            return error;
        });
    }
}

export default api;
