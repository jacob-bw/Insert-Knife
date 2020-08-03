import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { getCurrentUserId } from './UserData';

const getAllGames = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/games/allgames`).then((result) => {
    const allGames = result.data;
    resolve(allGames);
  }).catch((errorFromGetAllGames) => reject(errorFromGetAllGames));
})

const getCurrentGame = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/games/${getCurrentUserId}/currentgame`).then((result) => {
    const currentGame = result.data;
    resolve(currentGame);
  }).catch((errorFromGetCurrentGame) => reject(errorFromGetCurrentGame));
})

// the way I _think_ it's supposed to work

// const getCurrentRoom = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/api/games/${getCurrentUserId}/currentgame`).then((result) => {
//     const currentRoom = result.data.CurrentRoomId;
//     resolve(currentRoom);
//   }).catch((errorFromGetCurrentGame) => reject(errorFromGetCurrentGame));
// })

// same function w/ hard coded couchnap userId
const getCurrentRoom = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/games/1002/currentgame`).then((result) => {
    const currentRoom = result.data.CurrentRoomId;
    resolve(currentRoom);
  }).catch((errorFromGetCurrentGame) => reject(errorFromGetCurrentGame));
})


export { getAllGames, getCurrentGame , getCurrentRoom};
