// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGS_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log("Firebase API Key:", firebaseConfig.apiKey);

  const app =initializeApp(firebaseConfig);
  const auth =getAuth(app);

  export default auth