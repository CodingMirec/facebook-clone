import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDINYelYx_l36xdx9ptoz1XvvFMDGoknM",
  authDomain: "fb-clone-mirec.firebaseapp.com",
  databaseURL: "https://fb-clone-mirec.firebaseio.com",
  projectId: "fb-clone-mirec",
  storageBucket: "fb-clone-mirec.appspot.com",
  messagingSenderId: "838352411493",
  appId: "1:838352411493:web:0992bee87202356ba49f8c",
  measurementId: "G-P8F6HG01VW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();

export { auth, provider };
export default db;
