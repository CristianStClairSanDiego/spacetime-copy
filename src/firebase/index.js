import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEvcDwgLZR-tOk0MjCXhZWAxwPPzcvmy8",
  authDomain: "spacetime-replica.firebaseapp.com",
  projectId: "spacetime-replica",
  storageBucket: "spacetime-replica.appspot.com",
  messagingSenderId: "69531191355",
  appId: "1:69531191355:web:4a61cb1aac7f9251c5f41e",
  measurementId: "G-QKBG6CD4DV"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
