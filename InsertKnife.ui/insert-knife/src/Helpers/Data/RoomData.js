import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllRooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/rooms/allrooms`).then((result) => {
    const allRooms = result.data;
    resolve(allRooms);
  }).catch((errorFromGetAllRooms) => reject(errorFromGetAllRooms));
})

export { getAllRooms };
