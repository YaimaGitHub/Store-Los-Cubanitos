import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAkEt2MF-A2MLGa7TBb9TzbjVHPjluDwo",
  authDomain: "proyecto-react-2ee58.firebaseapp.com",
  projectId: "proyecto-react-2ee58",
  storageBucket: "proyecto-react-2ee58.appspot.com",
  messagingSenderId: "332198357338",
  appId: "1:332198357338:web:07be1be98e5bb48536eb63"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);