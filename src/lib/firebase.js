import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBA2ciSLYmu3Jf5GtcDG7kimOMAr5ZhelQ",
    authDomain: "galeria-sh.firebaseapp.com",
    projectId: "galeria-sh",
    storageBucket: "galeria-sh.appspot.com",
    messagingSenderId: "882441728880",
    appId: "1:882441728880:web:0c92e7e22645fdecd6d5b5",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };
