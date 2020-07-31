import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { getCurrentRoom } from './GameData';

const getAllRooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/rooms/allrooms`).then((result) => {
    const allRooms = result.data;
    resolve(allRooms);
  }).catch((errorFromGetAllRooms) => reject(errorFromGetAllRooms));
})

const moveToNewRoom = (roomId) => axios.put(`${baseUrl}/api/rooms/newroom/${roomId}`);

export { getAllRooms, moveToNewRoom };
