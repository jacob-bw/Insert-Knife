import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { getCurrentUserId } from './UserData';

const getOldGuesses = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/api/${getCurrentUserId}/guesses`).then((result) => {
    const oldGuesses = result.data;
    resolve (oldGuesses);
  }).catch((errorFromGetOldGuesses) => reject(errorFromGetOldGuesses));
})

const makeNewGuess = (guessWeaponId, guessSuspectId) => axios.post(`${baseUrl}/guess/newguess/${guessWeaponId}/${guessSuspectId}`);

export { getOldGuesses, makeNewGuess };
