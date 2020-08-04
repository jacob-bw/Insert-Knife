import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

// const getCurrentUserId = () => new Promise ((resolve, reject) => {
//   axios.get(`${baseUrl}/api/user/currentuser`).then((result) => {
//     const currentUserId = result;
//     resolve (currentUserId);
//   }).catch((errorFromGetCurrentUserId) => reject (errorFromGetCurrentUserId));
// })

const getCurrentUserId = () => {
  return(1002);
}

export { getCurrentUserId };


