import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { userId } from './UserData';

const getAllGames = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/games/allgames`).then((result) => {
    const allGames = result.data;
    resolve(allGames);
  }).catch((errorFromGetAllGames) => reject(errorFromGetAllGames));
})

const getCurrentGame = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/${userId}/currentgame`).then((result) => {
    const currentGame = result.data;
    resolve(currentGame);
  }).catch((errorFromGetCurrentGame) => reject(errorFromGetCurrentGame));
})




export { getAllGames, getCurrentGame };
