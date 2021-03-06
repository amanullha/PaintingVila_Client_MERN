
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzqGRtN5ExPaU1bw1Vs2_pWT9MIJCV0FY",
    authDomain: "painting-vila.firebaseapp.com",
    projectId: "painting-vila",
    storageBucket: "painting-vila.appspot.com",
    messagingSenderId: "299301170266",
    appId: "1:299301170266:web:e39082d692643852247c63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;