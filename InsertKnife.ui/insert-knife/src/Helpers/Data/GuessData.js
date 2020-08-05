import axios from 'axios';
import { baseUrl } from '../apiKeys.json';
import { getCurrentUserId } from './UserData';

const getOldGuesses = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/api/guess/${getCurrentUserId()}`).then((result) => {
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

const makeNewGuess = (guessWeaponId, guessSuspectId) => axios.post(`${baseUrl}/api/guess/newguess/${guessWeaponId}/${guessSuspectId}`);

const checkLastGuess = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/guess/last`).then((result) => {
    const solved = 'true';
    const atLarge = 'false';
    const gwid = result.data.weaponId;
    console.log("guess weapon id is", gwid)
    const gsid = result.data.suspectId;
    console.log("guess suspect id is", gsid)
    const grid = result.data.roomId;
    console.log("guess room id is", grid)
    const awid = result.data.answerWeaponId;
    const asid = result.data.answerSuspectId;
    const arid = result.data.answerRoomId;
    if (gwid === awid && gsid === asid && grid === arid){
      resolve(solved)
    } else resolve(atLarge)
  }).catch((errorFromLastGuess) => reject(errorFromLastGuess)); 
})

export { 
        getOldGuesses, 
        makeNewGuess,
        getAllWeapons,
        getAllSuspects,
        checkLastGuess
       };
