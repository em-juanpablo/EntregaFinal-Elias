import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPs6_NtODIZPQlYdgTZe3MdFiVlBozLP8",
  authDomain: "gpit-64084.firebaseapp.com",
  projectId: "gpit-64084",
  storageBucket: "gpit-64084.appspot.com",
  messagingSenderId: "26973045325",
  appId: "1:26973045325:web:2c74a9587fefd63eb7d204"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore (app);