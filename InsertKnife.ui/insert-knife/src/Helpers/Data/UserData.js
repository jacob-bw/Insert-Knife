import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getCurrentUserId = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/api/currentuser`).then((result) => {
    const currentUserId = result.data;
    resolve (currentUserId);
  }).catch((errorFromGetCurrentUserId) => reject (errorFromGetCurrentUserId));
})


export { getCurrentUserId };


