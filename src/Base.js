import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjOPao3dN7-kH3lcuf70xgnAePALIU7iI",
  authDomain: "weather-4aeff.firebaseapp.com",
  projectId: "weather-4aeff",
  storageBucket: "weather-4aeff.appspot.com",
  messagingSenderId: "427888625289",
  appId: "1:427888625289:web:af14dbf42aa4647bec2858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)