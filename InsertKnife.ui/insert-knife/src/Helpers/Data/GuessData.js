import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { getCurrentUserId } from './UserData';

const getOldGuesses = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/api/${getCurrentUserId}/guesses`).then((result) => {
    const oldGuesses = result.data;
    resolve (oldGuesses);
  }).catch((errorFromGetOldGuesses) => reject(errorFromGetOldGuesses));
})

const getAllWeapons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/weapons/viewall`).then((result) => {
    const allWeapons = result.data;
    resolve(allWeapons);
  }).catch((errorFromGetAllWeapons) => reject(errorFromGetAllWeapons));
})

const getAllSuspects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/suspects/viewall`).then((result) => {
    const allSuspects = result.data;
    resolve(allSuspects);
  }).catch((errorFromGetAllSuspects) => reject(errorFromGetAllSuspects));
})

const makeNewGuess = (guessWeaponId, guessSuspectId) => axios.post(`${baseUrl}/guess/newguess/${guessWeaponId}/${guessSuspectId}`);

export { 
        getOldGuesses, 
        makeNewGuess,
        getAllWeapons,
        getAllSuspects
       };

// WHEN RESUMING WORK
// - build dropdown items using the table data for weapons and suspects

// - iterate over the table data and pull both names and IDs

// - pass selected data to the url for weapon and suspect, room and game IDs will be pulled separately

// - check guess against game 

// - print old guess w/ data color coded