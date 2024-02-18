// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: 'AIzaSyAhRnfqffZQHzdInGExpVS8mlbdRbMA0ao',
  authDomain: 'ecoecho-ba1f6.firebaseapp.com',
  projectId: 'ecoecho-ba1f6',
  storageBucket: 'ecoecho-ba1f6.appspot.com',
  messagingSenderId: '278716934015',
  appId: '1:278716934015:web:e29dfd25d9cbe7ef099c4a',
  measurementId: 'G-BZFZZPZXJ4',
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);

export default getFirestore();


