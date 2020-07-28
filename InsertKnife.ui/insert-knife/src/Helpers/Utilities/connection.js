import firebase from 'firebase/app';
import f from '../apiKeys.json';

const firebaseApp = () => {
  firebase.initializeApp(f.firebaseConfig)
}

export default firebaseApp;
