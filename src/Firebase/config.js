import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARUxV7VFTT5n4IvudK1U99OvmjUeeioAM",
  authDomain: "thedotpaybank.firebaseapp.com",
  projectId: "thedotpaybank",
  storageBucket: "thedotpaybank.appspot.com",
  messagingSenderId: "1022668739265",
  appId: "1:1022668739265:web:3ab46afda565183204ba40",
  measurementId: "G-MZGY863P7B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
/* Initialize Firebase*/


export default app;