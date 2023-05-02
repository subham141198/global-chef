/* eslint-disable no-undef */

//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtfhlIuFFxdI8b0BFlHtj9e4mqPxs-dWk",
  authDomain: "global-chef-hub.firebaseapp.com",
  projectId: "global-chef-hub",
  storageBucket: "global-chef-hub.appspot.com",
  messagingSenderId: "709406801180",
  appId: "1:709406801180:web:42e7bfeb1eee6df6f48ed9"
};
  
// Initialize Firebase
 const app = initializeApp(firebaseConfig)
 export  const auth = getAuth(app)
 export default app