// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyAy4pEFYtRChgpnMrq8M86Ah0B4aUcRhCc',
   authDomain: 'fir-auth-98205.firebaseapp.com',
   projectId: 'fir-auth-98205',
   storageBucket: 'fir-auth-98205.appspot.com',
   messagingSenderId: '994131606122',
   appId: '1:994131606122:web:a5afed555b1743c1576813',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
