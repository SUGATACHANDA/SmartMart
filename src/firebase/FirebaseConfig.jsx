// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5XSNl_5XVrKqLJaKDWpg4j0MmZsSD5ZE",
  authDomain: "smart-mart-com.vercel.app",
  projectId: "smartmart-web",
  storageBucket: "smartmart-web.appspot.com",
  messagingSenderId: "745456694762",
  appId: "1:745456694762:web:3a44587355f1ffc68d6e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getFirestore(app);
const auth = getAuth(app);
export { firedb, auth };