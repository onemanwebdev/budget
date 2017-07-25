import axios from 'axios';

export const api = axios.get('budget_api/backend/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
