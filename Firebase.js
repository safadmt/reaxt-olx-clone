
import {initializeApp} from 'firebase/app'
import {getFirestore,collection,getDocs, addDoc} from 'firebase/firestore'
import  { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVGtmkISF_vKKqc1A24YkzegHRNi99o1s",
    authDomain: "react-olsclone.firebaseapp.com",
    projectId: "react-olsclone",
    storageBucket: "react-olsclone.appspot.com",
    messagingSenderId: "485235060570",
    appId: "1:485235060570:web:b221b70b94e0d67dbbcd63"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)