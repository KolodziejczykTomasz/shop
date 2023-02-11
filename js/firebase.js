import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC8Ran7RBs0wyk8jQsfg3mJTV2oWU-b9p8",
  authDomain: "shop-1027.firebaseapp.com",
  projectId: "shop-1027",
  storageBucket: "shop-1027.appspot.com",
  messagingSenderId: "195474140075",
  appId: "1:195474140075:web:3ee59ac31067a4a79400ee"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
