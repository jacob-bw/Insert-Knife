import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllRooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/rooms/allrooms`).then((result) => {
    const allRooms = result.data;
    resolve(allRooms);
  }).catch((errorFromGetAllRooms) => reject(errorFromGetAllRooms));
})

const moveToNewRoom = () => new Promise ((resolve, reject) => {
  axios.put(`${baseUrl}/api/rooms/newroom/{roomId}`)
})


export { getAllRooms };
