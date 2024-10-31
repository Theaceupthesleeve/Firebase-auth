import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_DgbNdxLE_94bWNmiq8CI0l9z-VhXc64",
    authDomain: "fir-auth-b2b80.firebaseapp.com",
    projectId: "fir-auth-b2b80",
    storageBucket: "fir-auth-b2b80.appspot.com",
    messagingSenderId: "949915765799",
    appId: "1:949915765799:web:2b9d091646229849e8d202"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);