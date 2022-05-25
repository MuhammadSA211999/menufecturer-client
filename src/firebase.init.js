
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBzvrSp4nA8d5CXh4jnvLvsqnXVcYa48Og",
    authDomain: "menufecturer-msa-12.firebaseapp.com",
    projectId: "menufecturer-msa-12",
    storageBucket: "menufecturer-msa-12.appspot.com",
    messagingSenderId: "988443853405",
    appId: "1:988443853405:web:da2376da5b75ae96a903b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth