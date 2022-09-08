import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCUtDyIAYTBdc7pCczJpgmLNBdoOIZuf3o",
  authDomain: "d-69ceb.firebaseapp.com",
  projectId: "d-69ceb",
  storageBucket: "d-69ceb.appspot.com",
  messagingSenderId: "220063110428",
  appId: "1:220063110428:web:5fb416eb91da4779a056d9",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
