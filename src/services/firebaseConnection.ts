
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl0Wjnfp0dr0sMDdcLLUirqRrAV1iaCHU",
  authDomain: "reactlinks-77c46.firebaseapp.com",
  projectId: "reactlinks-77c46",
  storageBucket: "reactlinks-77c46.appspot.com",
  messagingSenderId: "241322787363",
  appId: "1:241322787363:web:712eaafc5965d09f80e796"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};